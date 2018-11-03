const monthDays = {
    1: () => 31,
    2: (year) => isLeapYear(year) ? 29 : 28,
    3: () => 31,
    4: () => 28,
    5: () => 31,
    6: () => 30,
    7: () => 31,
    8: () => 31,
    9: () => 30,
    10: () => 31,
    11: () => 30,
    12: () => 31
}

export function isLeapYear(yearInt): boolean {
    return ((yearInt % 4 == 0) && (yearInt % 100 != 0)) || (yearInt % 400 == 0);
}

export function daysInMonth(monthInt: number, yearInt: number): number {
    return monthDays[monthInt](yearInt);

}

export function fillRange (start, end) {
  return Array.from(Array(end - start + 1).keys()).map((item, index) => start + index + item - item);
};