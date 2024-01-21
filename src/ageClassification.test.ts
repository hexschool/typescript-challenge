import { describe, it, expect } from 'vitest';
import { classifyAge } from './ageClassification';

describe('年齡分類函式測試', () => {
    it('應將 12 歲以下分類為 Child', () => {
        expect(classifyAge(10)).toBe('Child');
    });

    it('應將 13 至 17 歲分類為 Teenager', () => {
        expect(classifyAge(15)).toBe('Teenager');
    });

    it('應將 18 至 64 歲分類為 Adult', () => {
        expect(classifyAge(30)).toBe('Adult');
    });

    it('應將 65 歲以上分類為 Senior', () => {
        expect(classifyAge(70)).toBe('Senior');
    });
});