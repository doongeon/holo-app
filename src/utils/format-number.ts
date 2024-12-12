/**
 * 숫자를 받아 소수점 다섯째 자리까지 포맷하고,
 * 뒤에 0이 있다면 생략하며, 소수점 아래가 전부 0이면 정수만 반환합니다.
 * 매우 작은 값은 지수 표기법으로 표현합니다.
 *
 * @param amount - 포맷할 숫자
 * @returns 포맷된 문자열
 */
export const formatNumber = (amount: number): string => {
    if (amount === 0) return "0"; // 0은 특별 처리

    // 숫자가 10^-5 이하로 작으면 지수 표기법 사용
    if (Math.abs(amount) < 1e-5) {
        return amount.toExponential(1); // 지수 표기법으로 변환 (소수점 첫째 자리까지)
    }

    // 소수점 다섯째 자리까지 고정 후 불필요한 0 제거
    const trimmed = parseFloat(amount.toFixed(5)).toString();

    return trimmed;
};
