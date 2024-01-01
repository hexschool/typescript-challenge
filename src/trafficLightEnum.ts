/**
 * 這個函式的目的是根據輸入的交通信號燈狀態返回對應的描述。
 * 你需要使用 TypeScript 的 Enum 來定義交通信號燈的狀態，並在函式中返回對應的描述。
 * Enum 應該包含 Red、Yellow 和 Green 三種狀態，並分別對應到 'Red'、'Yellow' 和 'Green' 三個字串。
 * 
 * 範例:
 * 輸入: TrafficLight.Red
 * 輸出: 'The traffic light is Red'
 */
export enum TrafficLight {
  Red = 'Red',
  Yellow = 'Yellow',
  Green = 'Green'
}
export function getTrafficLightStatus(light: TrafficLight) {
  // 在此實現函式
  switch (light) {
    case 'Red':
      return 'The traffic light is Red';
      break;
    case 'Yellow':
      return 'The traffic light is Yellow';
      break;
    case 'Green':
        return 'The traffic light is Green';
        break;
    default:
      throw (new Error('No have status code!'));
  }
}