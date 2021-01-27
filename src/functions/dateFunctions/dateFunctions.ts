export function dateToStr(date: Date): string {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

export function strToDate(str: string): Date {
  return new Date(str.replaceAll("-", "/"));
}
