import { describe, it, expect } from 'vitest';
import { parseUrl } from './urlParsing';

describe('URL 解析函式測試', () => {
    it('應正確解析 URL', () => {
        const url = 'https://www.example.com/path';
        const result = parseUrl(url);
        expect(result).toEqual({
            protocol: 'https:',
            hostname: 'www.example.com',
            path: '/path'
        });
    });
});