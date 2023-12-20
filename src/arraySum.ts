/**
 * 計算數字陣列的總和
 * @param numbers - 要計算總和的數字陣列
 * 
 * 範例:
 * 輸入: [1, 2, 3, 4, 5]
 * 輸出: 15
 * 
 * 輸入: [-1, -2, -3]
 * 輸出: -6
 * 
 * 輸入: []
 * 輸出: 0
 */
export function arraySum(numbers: number[]): number {
    let sum = 0
    numbers.forEach(number => {
        sum += number
    })
    return sum
}