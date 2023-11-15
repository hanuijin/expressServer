"use strict";
// dateUtil.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.differenceInDays = exports.addDays = exports.formatDate = exports.getCurrentDate = void 0;
// 현재 날짜를 가져오는 함수
function getCurrentDate() {
    return new Date();
}
exports.getCurrentDate = getCurrentDate;
// 주어진 날짜를 포맷에 맞게 문자열로 변환하는 함수
function formatDate(date, format) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
}
exports.formatDate = formatDate;
// 주어진 날짜에 일정 기간을 더하는 함수
function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}
exports.addDays = addDays;
// 두 날짜 간의 차이를 일 단위로 계산하는 함수
function differenceInDays(date1, date2) {
    const timeDiff = date2.getTime() - date1.getTime();
    return Math.floor(timeDiff / (1000 * 3600 * 24));
}
exports.differenceInDays = differenceInDays;
