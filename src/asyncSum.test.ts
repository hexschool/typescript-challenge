import { describe, it, expect } from 'vitest';
import { asyncSum } from './asyncSum';

describe('非同步加總函式', () => {
    it('應該能計算陣列中所有數字的總和', async () => {
        const result = await asyncSum([1, 2, 3, 4, 5]);
        expect(result).toBe(15);
    });

    it('應該能正確處理空陣列', async () => {
        const result = await asyncSum([]);
        expect(result).toBe(0);
    });
});