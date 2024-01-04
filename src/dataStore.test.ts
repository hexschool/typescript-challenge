import { describe, it, expect } from 'vitest';
import { createDataStore } from './dataStore';

describe('DataStore 函式', () => {
    it('應該允許添加和檢索項目', () => {
        const store = createDataStore<number>();
        store.add(1);
        store.add(2);
        expect(store.getAll()).toEqual([1, 2]);
    });

    it('應該能處理不同的類型', () => {
        const stringStore = createDataStore<string>();
        stringStore.add('hello');
        stringStore.add('world');
        expect(stringStore.getAll()).toEqual(['hello', 'world']);
    });
});