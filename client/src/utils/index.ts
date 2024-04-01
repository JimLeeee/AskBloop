import { MouseEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ja, zhCN, es } from 'date-fns/locale';
import { LocaleType, RepoType, RepoUi } from '../types/general';
import langs from './langs.json';

export const copyToClipboard = (value: string) => {
  // navigator clipboard api needs a secure context (https)
  if (
    navigator.clipboard &&
    typeof navigator.clipboard.writeText === 'function' &&
    window.isSecureContext
  ) {
    return navigator.clipboard.writeText(value).then();
  } else {
    let textArea = document.createElement('textarea');
    textArea.value = value;
    // make the textarea out of viewport
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    return new Promise((res, rej) => {
      document.execCommand('copy') ? res(true) : rej();
      textArea.remove();
    });
  }
};

/**
 * Returns a hash code from a string, only use for comparison as not secure
 * @param  {String} str The string to hash.
 * @return {Number}    A 32bit integer
 * @see http://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
 */
export const hashCode = (str: string) => {
  let hash = 0;
  for (let i = 0, len = str.length; i < len; i++) {
    let chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

export const parseFilters = (input: string) => {
  const regex = /((repo|lang):[^\s)]+)/gim;

  let m;
  const filters: Record<string, string[]> = {
    lang: [],
    repo: [],
  };

  while ((m = regex.exec(input)) !== null) {
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }
    if (m[2]) {
      filters[m[2]].push(m[1].split(':')[1]);
    }
  }
  return filters;
};

export const getFileExtensionForLang = (lang: string) => {
  if (!lang) {
    return 'default';
  }
  // @ts-ignore
  return 'index' + langs[lang]?.[0];
};

export const isWindowsPath = (path: string) => path.includes('\\');

export const breadcrumbsItemPath = (
  array: string[],
  index: number,
  isWindows: boolean,
  isFile?: boolean,
) => {
  const separator = isWindows ? '\\' : '/';
  const path = array.slice(0, index + 1).join(separator);

  const pathEnding = isFile ? '' : separator;
  return `${path}${pathEnding}`;
};

export const splitPath = (path: string) =>
  path?.split(isWindowsPath(path) ? '\\' : '/') || [];

export const splitPathForBreadcrumbs = (
  path: string,
  onClick?: (
    e: MouseEvent<HTMLButtonElement>,
    item: string,
    index: number,
    arr: string[],
  ) => void,
) => {
  return splitPath(path)
    .filter((p) => p !== '/')
    .map((item, index, arr) => ({
      label: item,
      onClick: (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        onClick?.(e, item, index, arr);
      },
    }));
};

export const buildRepoQuery = (
  repo?: string,
  path?: string,
  selectedBranch?: string | null,
) => {
  return `open:true ${repo ? `repo:${repo}` : ''} ${
    path ? `path:${path.includes(' ') ? `"${path}"` : path}` : ''
  }${selectedBranch ? ` branch:${selectedBranch}` : ''}`;
};

export const getFileManagerName = (os: string) => {
  switch (os) {
    case 'Darwin':
      return 'Finder';
    case 'Windows_NT':
      return 'File Explorer';
    default:
      return 'File manager';
  }
};

export function groupReposByParentFolder(repos: RepoType[]): RepoUi[] {
  const isWindows = repos?.[0]?.ref ? isWindowsPath(repos[0].ref) : false;
  // Extract unique parent folders
  const parentFolders = Array.from(
    new Set(
      repos.map((obj) =>
        obj.ref
          .split(isWindows ? '\\' : '/')
          .slice(0, -1)
          .join(isWindows ? '\\' : '/'),
      ),
    ),
  );

  // Group repos by parent folder
  const groupedObjects: {
    [parentFolder: string]: string[];
  } = {};
  for (const parentFolder of parentFolders) {
    groupedObjects[parentFolder] = repos
      .filter((obj) => obj.ref.startsWith(parentFolder + '/'))
      .map((r) => r.ref);
  }

  // Add folderName property to each repo
  const objectsWithFolderName: RepoUi[] = repos.map((r) => {
    const folderName =
      Object.entries(groupedObjects)
        .filter(([folder, repos]) => repos.includes(r.ref))
        .sort((a, b) => (a[0].length < b[0].length ? -1 : 1))
        .pop()?.[0] || isWindows
        ? '\\'
        : '/';
    return {
      ...r,
      folderName,
      selected: true,
      shortName: r.name,
    };
  });

  const commonFolder = getCommonFolder(
    objectsWithFolderName.map((lr) => lr.folderName),
  )
    .split(isWindows ? '\\' : '/')
    .slice(0, -1)
    .join(isWindows ? '\\' : '/');

  return objectsWithFolderName.map((r) => ({
    ...r,
    folderName: r.folderName.replace(commonFolder, ''),
  }));
}

export const getCommonFolder = (paths: string[]) => {
  if (!paths?.length) {
    return '/';
  }
  const pathParts = paths
    .map((p) => splitPath(p))
    .sort((a, b) => a.length - b.length);
  let commonFolder = [];

  for (let i = 0; i < pathParts[0].length; i++) {
    if (pathParts.every((pp) => pp[i] === pathParts[0][i])) {
      commonFolder.push(pathParts[0][i]);
    } else {
      break;
    }
  }
  return commonFolder.join(isWindowsPath(paths[0]) ? '\\' : '/');
};

export const arrayUnique = (array: any[], property: string) => {
  const unique: any = {};
  const distinct = [];
  for (const i in array) {
    if (typeof unique[array[i][property]] == 'undefined') {
      distinct.push(array[i]);
    }
    unique[array[i][property]] = 0;
  }
  return distinct;
};

export const generateUniqueId = (): string => {
  return uuidv4();
};

export const deleteAuthCookie = () => {
  document.cookie =
    'auth_cookie=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

export const previewTheme = (key: string) => {
  document.body.classList.add('notransition'); // to avoid flashing UI with color changes
  document.body.dataset.theme = key;
  setTimeout(
    () => document.body.classList.remove('notransition'),
    300, // longest color transition
  );
};

export const calculatePopupPositionInsideContainer = (
  top: number,
  left: number,
  containerRect: DOMRect,
) => {
  const viewportWidth =
    window.innerWidth || document.documentElement.clientWidth;
  const viewportHeight =
    window.innerHeight || document.documentElement.clientHeight;

  const popupWidth = 170; // Adjust as needed
  const popupHeight = 34; // Adjust as needed

  top -= popupHeight + 15;

  // Adjust top position to ensure the popup stays within the container
  if (top < containerRect.top) {
    top = containerRect.top;
  } else if (top > containerRect.bottom) {
    top = containerRect.bottom - popupHeight;
  }

  // Adjust left position to ensure the popup stays within the container
  if (left < containerRect.left) {
    left = containerRect.left;
  } else if (left > containerRect.right) {
    left = containerRect.right - popupWidth;
  }

  // Adjust top position to ensure the popup stays within the viewport
  if (top < 0) {
    top = 0;
  } else if (top + popupHeight > viewportHeight) {
    top = viewportHeight - popupHeight;
  }

  // Adjust left position to ensure the popup stays within the viewport
  if (left < 0) {
    left = 0;
  } else if (left + popupWidth > viewportWidth) {
    left = viewportWidth - popupWidth;
  }

  return { top, left };
};

export const escapeHtml = (unsafe: string) => {
  return unsafe
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
};

export function humanFileSize(
  bytes: number,
  si: boolean = true,
  dp: number = 1,
) {
  const thresh = si ? 1000 : 1024;

  if (Math.abs(bytes) < thresh) {
    return bytes + ' B';
  }

  const units = si
    ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
  let u = -1;
  const r = 10 ** dp;

  do {
    bytes /= thresh;
    ++u;
  } while (
    Math.round(Math.abs(bytes) * r) / r >= thresh &&
    u < units.length - 1
  );

  return bytes.toFixed(dp) + ' ' + units[u];
}

export const getDateFnsLocale = (locale: LocaleType) => {
  switch (locale) {
    case 'ja':
      return { locale: ja };
    case 'zhCN':
      return { locale: zhCN };
    case 'es':
      return { locale: es };
    default:
      return undefined;
  }
};