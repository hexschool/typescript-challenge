import { describe, it, expect } from 'vitest';
import { uniqueElements } from './uniqueElements';

describe('唯一元素函式', () => {
    it('應從陣列中回傳唯一元素', () => {
        expect(uniqueElements([1, 2, 2, 3, 4, 4, 4])).toEqual([1, 2, 3, 4]);
    });
});