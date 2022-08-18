import { differenceInDays, differenceInHours, format } from "date-fns";

export const DATE_FORMAT = "dd-MMM-yyyy";
export const DATE_FORMAT_DATE = "dd-MMM";
export const TIME_FORMAT = "hh:mm a";
export const DATE_TIME_FORMAT = `${DATE_FORMAT} ${TIME_FORMAT}`;

export function getDuration(date: string) {
  if (differenceInDays(new Date(), new Date(date)) > 0) {
    return `${differenceInDays(new Date(), new Date(date))} day(s) ago`;
  } else {
    return `${differenceInHours(new Date(), new Date(date))} hours ago`;
  }
}

function convertDateStringToObject(date: Date | string) {
  return typeof date === "string" ? new Date(date) : date;
}

function formatDateTime(date: Date | string, dateTimeFormat: string) {
  return date !== ""
    ? format(convertDateStringToObject(date), dateTimeFormat)
    : "";
}

function getDisplayDate(dateTime: Date | string): string {
  return formatDateTime(dateTime, DATE_TIME_FORMAT);
}

function formatXAxis(tickItem: any) {
  return formatDateTime(tickItem, DATE_FORMAT);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getDuration,
  getDisplayDate,
  formatXAxis,
};
