//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (numberOfRows) => {
  let output = [];
  let new_row = [];
  if (numberOfRows == 0) {
    return output;
  }
  for (let current_row = 0, element_index = 0, row_index = 0, column_index = 0; current_row < numberOfRows; current_row++, element_index = 0) {
    
    let first_element = 0;
    let second_element = 0;
    let new_element = 0;
    do {
      if (output[current_row-1]?.[element_index-1] !== undefined) {
        first_element = output[current_row-1][element_index-1];;
      }
      if (output[current_row-1]?.[element_index] !== undefined) {
        second_element = output[current_row-1][element_index];;
      } 
      
      if (first_element === 0 && second_element === 0) {
        new_element = 1;
      } else { new_element = first_element+second_element;}
       
      new_row.push(new_element);
      new_element = 0;
      first_element = 0;
      second_element = 0;
      element_index++;
    } while (new_row.length <= current_row);
    output.push(new_row);
    new_row = [];
  }  
  return output;
};
