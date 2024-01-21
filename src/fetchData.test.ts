import { describe, it, expect } from 'vitest';
import { fetchData } from './fetchData';

describe('非同步取得資料', () => {
    it('應該能從提供的 URL 取得資料', async () => {
        const data = await fetchData('https://jsonplaceholder.typicode.com/todos/1');
        expect(data).toHaveProperty('id');
    });
});