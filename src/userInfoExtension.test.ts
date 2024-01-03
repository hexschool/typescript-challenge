import { describe, it, expect } from 'vitest';
import { createFullUserInfo } from './userInfoExtension';

describe('使用者資訊擴充', () => {
    it('應該正確合併使用者基本資訊和地址資訊', () => {
        const user = createFullUserInfo({ name: 'John', age: 30, street: 'Main St', city: 'Metropolis' });
        expect(user).toEqual({ name: 'John', age: 30, street: 'Main St', city: 'Metropolis' });
    });
});