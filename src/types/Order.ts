import { Product } from "./Product";

type OrderId = number;

type MoneyDto = {
  amount: number;
  currency: Currency;
}

class MoneyCls {
  amount: number;
  currency: Currency;

  constructor(amount: number, currency: Currency) {
    this.amount = amount;
    this.currency = currency;
  }

  public add(amount: number) {
    this.amount += amount;
  }

  public nominalValue() {
    return this.amount;
  }

  public produceDto(): MoneyDto {
    return {
      amount: this.amount,
      currency: this.currency,
      // description: 'dsfsdf'
    };
  }
}

const myMoney = new MoneyCls(100, 'PLN');
myMoney.add(50);
myMoney.nominalValue(); // 150



type Currency = 'PLN' | 'USD';
type Money = {
  amount: number
  currency: Currency
}

// amount * 10min

export interface Order {
  id: string;
  // total: number; // { total: 8.98, currency: "PLN" }
  total: Money;
  products: Product[];
};


