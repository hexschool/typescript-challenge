import { describe, it, expect } from 'vitest';
import { toUpperCase } from './stringProcessing';

describe('字串處理函式測試', () => {
    it('應該將字串轉換為大寫', () => {
        expect(toUpperCase('hello')).toBe('HELLO');
    });
});