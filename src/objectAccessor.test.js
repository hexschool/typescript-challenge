import { describe, it, expect } from 'vitest';
import { createObjectAccessor } from './objectAccessor';

describe('設定物件存取器', () => {
    it('應該允許對任意物件的屬性進行讀寫操作', () => {
        const obj = { name: 'Alice', age: 25 };
        const accessor = createObjectAccessor(obj);
        expect(accessor.get('name')).toBe('Alice');
        accessor.set('age', 26);
        expect(accessor.get('age')).toBe(26);
    });
});