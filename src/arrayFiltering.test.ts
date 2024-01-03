import { describe, it, expect } from 'vitest';
import { filterEvens } from './arrayFiltering';

describe('陣列過濾函式測試', () => {
    it('應該過濾出偶數', () => {
        expect(filterEvens([1, 2, 3, 4, 5])).toEqual([2, 4]);
    });
});