//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (input) => {
  let output = [];

  if (input == 0) {
    return output;
  }

 // This approach is based on creating firstly empty output rows - their quantity
 // is estalished based on the shortest element of the input.
 // Output array can be 'stretched' if needed (if other input elements are longer than the shortest one).

// Establishing the shortest row = minimum output size:
  let min_number_of_rows = input[0].length;

  for (let index = 0; index < input.length; index++) {
    if (input[index].length < min_number_of_rows) {
      min_number_of_rows = input[index].length;
    }
    else {
      continue;
    };
  };

// Creating empty output array
  do {
    output.push('');
  } while(output.length != min_number_of_rows);

// Looping through the input and output at the same time.
// Taking input[index] as elements of input array 
  for (let index = 0; index < input.length; index++) {
  // Taking element_index also as the number of element from output
    for (let element_index = 0; element_index < input[index].length; element_index++) {
      // In array needs to be extended/stretched with another rows, it will check if additional ' ' needs to be added
      // before adding any sign from input
      if (output[element_index] === undefined) {
        output.push('');
        while (output[element_index].length != index) {
          output[element_index] += ' ';
        }
        output[element_index] += input[index][element_index];
      }
      else {
        // In case when a sign needs to be added to row with existing output like:
        // 123
        // 1xy (x = space under "2", y = place when new sign needs to be added)
        // A proper ammount of spaces will be added, then next sign from queue
        if (output[element_index][index-1] === undefined && index > 0) {
          while (output[element_index].length != index) {
            output[element_index] += ' ';
          };
          output[element_index] += input[index][element_index];
        }
        else {
          output[element_index] += input[index][element_index];
        };
      };
    };
  };
  return output;
};
