// dateUtil.ts

// 현재 날짜를 가져오는 함수
export function getCurrentDate(): Date {
    return new Date();
  }
  
  // 주어진 날짜를 포맷에 맞게 문자열로 변환하는 함수
  export function formatDate(date: Date, format: string): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  }
  
  // 주어진 날짜에 일정 기간을 더하는 함수
  export function addDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
  
  // 두 날짜 간의 차이를 일 단위로 계산하는 함수
  export function differenceInDays(date1: Date, date2: Date): number {
    const timeDiff = date2.getTime() - date1.getTime();
    return Math.floor(timeDiff / (1000 * 3600 * 24));
  }
  