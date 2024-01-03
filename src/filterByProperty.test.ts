import { describe, it, expect } from 'vitest';
import { filterByProperty } from './filterByProperty';

describe('filterByProperty 函式', () => {
    it('應該根據屬性值過濾物件陣列', () => {
        const items = [
            { name: 'Alice', age: 30 },
            { name: 'Bob', age: 25 },
            { name: 'Carol', age: 30 }
        ];
        const result = filterByProperty(items, 'age', 30);
        expect(result).toEqual([
            { name: 'Alice', age: 30 },
            { name: 'Carol', age: 30 }
        ]);
    });
});