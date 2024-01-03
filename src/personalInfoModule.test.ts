import { describe, it, expect } from 'vitest';
import { createPersonalInfo } from './personalInfoModule';

describe('個人資訊管理模組', () => {
    it('應該創建個人資訊', () => {
        const info = createPersonalInfo('John Doe', 30, 'john@example.com');
        expect(info).toEqual({ name: 'John Doe', age: 30, email: 'john@example.com' });
    });
});