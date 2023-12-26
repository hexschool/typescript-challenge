/**
 * 將攝氏溫度轉換為華氏溫度
 * @param {number} celsius - 攝氏溫度
 * @returns {number} 華氏溫度
 */
export function celsiusToFahrenheit(celsius: number): number {
  return (celsius * 9) / 5 + 32;
}
