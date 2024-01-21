import { describe, it, expect } from 'vitest';
import { sortArray, filterArray, transformArray } from './dataProcessingModule';

describe('資料處理模組', () => {
    it('應該正確排序陣列', () => {
        expect(sortArray([3, 1, 4])).toEqual([1, 3, 4]);
    });

    it('應該過濾陣列', () => {
        expect(filterArray([1, 2, 3, 4], num => num % 2 === 0)).toEqual([2, 4]);
    });

    it('應該轉換陣列', () => {
        expect(transformArray([1, 2, 3], num => num * 2)).toEqual([2, 4, 6]);
    });
});