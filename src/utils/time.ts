/* eslint-disable no-bitwise */
import moment, { Moment } from 'moment';
import type { RangePickerProps } from 'antd/es/date-picker';
import { PST_TIME_ZONE, YYYY_MM_DD_HH_MM_SS } from '@/constants';

export const disabledDateBeforeNow: RangePickerProps['disabledDate'] = (
  current,
) => {
  // Can not select days before today and today
  return current < moment();
};
/**
 * @description  date to pst time format string
 * @param dateTime string | number
 * @param format string @default 'YYYY-MM-DD HH:mm:ss'
 * @returns string
 */
export const getDatePstString = (
  dateTime: string | number,
  format = YYYY_MM_DD_HH_MM_SS,
) => (dateTime ? moment.tz(dateTime, PST_TIME_ZONE).format(format) : '');

/**
 * @description  get date start time unix
 * @param dateMoment Moment
 * @returns number
 */
export const getDateTimeStartUnix = (dateTime: Moment) => {
  if (!dateTime) {
    return 0;
  }
  return moment
    .tz(dateTime.format(YYYY_MM_DD_HH_MM_SS), PST_TIME_ZONE)
    .startOf('day')
    .valueOf();
};
/**
 * @description  get date start time unix
 * @param dateMoment Moment
 * @returns number
 */
export const getDateTimeEndUnix = (dateTime: Moment) => {
  if (!dateTime) {
    return 0;
  }
  return moment
    .tz(dateTime.format(YYYY_MM_DD_HH_MM_SS), PST_TIME_ZONE)
    .endOf('day')
    .valueOf();
};
/**
 * @description  timestamp to format time string
 * @param dateMoment number
 * @param format string @default 'YYYY-MM-DD HH:mm:ss'
 * @returns
 */
export const timestampToPST = (
  dateTime: number,
  format = YYYY_MM_DD_HH_MM_SS,
) => {
  const m = moment(dateTime);
  if (!dateTime || !m.isValid()) {
    return 'is invalid time';
  }
  return m.tz(PST_TIME_ZONE).format(format);
};

/**
 * @description  datePicker value to timestamp
 * @param value Moment
 * @returns
 */
export const datePickerToTimestamp = (
  value: Moment,
  format = YYYY_MM_DD_HH_MM_SS,
) => {
  if (value) {
    return moment.tz(value.format(format), PST_TIME_ZONE).valueOf();
  }
  return 0;
};
