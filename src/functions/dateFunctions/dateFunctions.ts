export function dateToStr(date: Date): string {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

export function strToDate(str: string): Date {
  return new Date(str.replaceAll("-", "/"));
}

export function getWeekExtremes(date = new Date()) {
  const startDiff = date.getDay();
  const endDiff = 6 - date.getDay();

  const end = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() + endDiff
  );

  const start = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() - startDiff
  );

  return {
    start,
    date,
    end,
  };
}

export function listOfDays({ start, end }: { start: Date; end: Date }): Date[] {
  let dates = [];
  let firstDate = start;
  while (firstDate <= end) {
    // this pushes a new date , if you were to push firstDate then you will keep updating every item in the array
    dates.push(new Date(firstDate));
    // this line modifies the original firstDate reference which you want to make the while loop work
    firstDate.setDate(firstDate.getDate() + 1);
  }

  return dates;
}

export function areDifferentDates(first: Date, last: Date) {
  if (first.getTime() < last.getTime()) return true;
  return false;
}
