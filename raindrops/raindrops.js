//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (raindrops) => {
  let output = '';
  if (raindrops % 3 == 0) {
    output += 'Pling';
  }
  if (raindrops % 5 == 0) {
    output += 'Plang';
  }
  if (raindrops % 7 == 0) {
    output += 'Plong';
  }
  if (raindrops % 3 != 0 && raindrops % 5 != 0 && raindrops % 7 != 0) 
    { output = `${raindrops}` }
  return output;
};
