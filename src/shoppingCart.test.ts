import { describe, it, expect } from 'vitest';
import { createShoppingCart } from './shoppingCart';

describe('購物車功能測試', () => {
    it('應該可以加入商品並計算總價格', () => {
        const cart = createShoppingCart();
        cart.addItem({ id: 'p1', name: '商品1', price: 100 });
        cart.addItem({ id: 'p2', name: '商品2', price: 200 });

        expect(cart.getTotalPrice()).toBe(300);
        expect(cart.getItemCount()).toBe(2);
    });

    it('清空購物車後，購物車內應該沒有商品', () => {
        const cart = createShoppingCart();
        cart.addItem({ id: 'p1', name: '商品1', price: 100 });
        cart.clear();

        expect(cart.getTotalPrice()).toBe(0);
        expect(cart.getItemCount()).toBe(0);
    });
});