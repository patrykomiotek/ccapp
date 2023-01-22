// unique symbol - wymuszamy niekompatybilnoś jeśli chodzi o pole type
type Money = number & { readonly type: unique symbol };

let m: Money;
let n: number;

m = n;
n = m;

