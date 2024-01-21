import { describe, it, expect } from 'vitest';
import { formatDate, roundNumber } from './utilityFunctionsModule';

describe('公用函式模組', () => {
    it('應該正確格式化日期', () => {
        const date = new Date('2023-01-01');
        expect(formatDate(date)).toBe('2023-01-01');
    });

    it('應該四捨五入數字', () => {
        expect(roundNumber(1.5)).toBe(2);
    });
});