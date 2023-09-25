/* eslint-disable no-bitwise */
import moment from 'moment';
import { DEFAULT_LANGUAGE, YYYY_MM_DD_HH_MM_SS } from '@/constants';

export const readFileToText = (file: Blob): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsText(file, 'utf8');
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (e) => reject(e);
  });

export function parseJSON(json: string): Record<string, unknown> {
  try {
    return JSON.parse(json);
  } catch (e) {
    return {};
  }
}

export const jsonValidate = (value: string): boolean => {
  try {
    return !!JSON.parse(value);
  } catch (e) {
    return false;
  }
};

interface DownloadProps {
  content: BlobPart;
  filename: string;
  preview?: boolean;
}
export function download({ content, filename, preview }: DownloadProps): void {
  const blob = new window.Blob([content]);

  const url = URL.createObjectURL(blob.slice(0, blob.size));
  if (!preview) {
    const link = document.createElement('a');
    link.download = filename;
    link.style.display = 'none';
    link.href = url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    window.open(url);
  }
  URL.revokeObjectURL(url);
}

export function copy(text: string, callback: () => void): void {
  const textArea = document.createElement('textarea');

  textArea.style.position = 'fixed';
  textArea.style.opacity = '0';
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
  callback && callback();
}
/**
 * @desc 千位分隔符
 * @param value
 * @param decimal
 * @param symbol
 * @returns string
 */

export function generateThousandsSeparator(
  value: string | number = 0,
  decimal = 2,
  symbol = ',',
) {
  const input = typeof value === 'string' ? Number(value) : value;
  // eslint-dgetAuthPermissionisable-next-line no-bitwise
  const isFloat = ~~input !== input;
  const target = isFloat ? input.toFixed(decimal) : `${input}`;

  return target.replace(/(^|\s)\d+/g, (m) =>
    m.replace(/(?=(?!\b)(\d{3})+$)/g, symbol),
  );
}

export function getContainer(node?: any): HTMLElement {
  if (node) {
    return node.parentNode;
  }
  return document.body;
}

export function convertCurrentLanguage(lang: string): string {
  return lang === DEFAULT_LANGUAGE ? 'enUS' : 'zhCN';
}

export const getAuthPermission = (pageCode: string, authCode: string) => {
  if (!window?.PERMISSIONS) return true;
  // @ts-ignore
  const { components = [] } =
    window?.PERMISSIONS?.find((permission) => permission.code === pageCode) ??
    {};

  return components.find(
    (component: { code: string }) => component?.code === authCode,
  )?.visible;
};

/**
 * @description time zone date to local date and format
 * @param dateTime string 2023-07-20Z02:13:18
 * @param format string @default 'YYYY-MM-DD HH:mm:ss'
 * @returns string
 */
export const UTCToLocalDate = (
  dateTime: string,
  format = YYYY_MM_DD_HH_MM_SS,
) => {
  if (!dateTime) {
    return '';
  }
  return moment.utc(dateTime).local().format(format);
};
