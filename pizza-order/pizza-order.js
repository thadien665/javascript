/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  let sum = 0;
  switch (pizza) {
    case 'Margherita':
      sum += 7;
      break;
    case 'Caprese':
      sum += 9;
      break;
    default:
      sum += 10;
      break;
  }
  if (extras.length !== 0) {
    extras_count();
  }
  else {
    return sum;
  }
  function extras_count() {
      let index = extras.length-1;
      switch (extras[index]) {
        case 'ExtraSauce':
          sum += 1;
          extras.pop();
          break;
        default:
          sum += 2;
          extras.pop();
          break;
      }
      if (extras.length !== 0) {
        extras_count()
    }
  }
  return sum;
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  let total = 0;
  for (let index = 0; index < pizzaOrders.length; index++) {
    total += pizzaPrice(pizzaOrders[index].pizza, ...pizzaOrders[index].extras);
  }
  return total;
}
