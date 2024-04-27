import { Signal } from "signal-polyfill";

// 새로운 시그널을 정의한다
export const cart = new Signal.State([
  {
    id: 1,
    name: "Apple",
    price: 1.5,
    count: 1,
  },
  {
    id: 2,
    name: "Banana",
    price: 3,
    count: 5,
  },
  {
    id: 3,
    name: "Cherry",
    price: 2,
    count: 6,
  },
]);

/**
 * 신경써야 할 것
 * Signal.Computed 는 Vue의 Computed처럼 "살아 있는 값" 인가?
 * (= cart() 의 값이 변하면 Computed가 반환하는 값도 함께 갱신되는가)
 */
export const total = new Signal.Computed<number>(() =>
  cart.get().reduce((acc, cur) => acc + cur.price * cur.count, 0)
);

export const discount = new Signal.State(0.1);

export const grandTotal = new Signal.Computed<number>(
  () => total.get() * (1 - discount.get())
);
