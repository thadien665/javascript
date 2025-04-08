//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function gigasecond(date) {
  let future_date = new Date();
  future_date.setTime(date.getTime()+1000000000000);
  return future_date;
};