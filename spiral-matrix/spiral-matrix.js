//
// This is only a SKELETON file for the 'Spiral Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const spiralMatrix = (size) => {
  let final_array = [];
  let row = [];
  
  if (size == 0) {
    return final_array;
  };

  do {
    row.push(null);
  } while(row.length != size);
  do {
    final_array.push([...row])
  } while(final_array.length != size);

  final_array[0][0] = 1;
  if (size == 1) {
    return final_array;
  }
  
  for (let counter = 2, row_index = 0, el_index = 0, direction = 'right'; counter <= size**2;) {
  switch (direction) {
    case 'right':
      if (counter > size**2) {
        return final_array;
      }
      do {
        el_index++;
          if (final_array[row_index][el_index] === null) {
            final_array[row_index][el_index] = counter;
            counter++;
          }
          else {
            el_index--;
            direction = 'down';
          }
      } while(direction == 'right' && counter <= size**2); 
    case 'down':
      if (counter > size**2) {
        return final_array;
      }
      do {
        row_index++;
        if (final_array[row_index] !== undefined) {
          if (final_array[row_index][el_index] === null) {
          final_array[row_index][el_index] = counter;
          counter++;
          }
          else { row_index--; direction = 'left';};
        }
        else {
          row_index--;
          direction = 'left';
        }  
      } while(direction == 'down' && counter <= size**2);
    case 'left':
      if (counter > size**2) {
        return final_array;
      }
      do {
        el_index--;
          if (final_array[row_index][el_index] === null) {
            final_array[row_index][el_index] = counter;
            counter++;
          }
          else {
            el_index++;
            direction = 'up';
          }
      } while(direction == 'left' && counter <= size**2);
    case 'up':
      if (counter > size**2) {
        return final_array;
      }
      do {
        row_index--;
        if (final_array[row_index][el_index] === null) {
          final_array[row_index][el_index] = counter;
          counter++;
        }
        else {
          row_index++;
          direction = 'right';
        }  
      } while(direction == 'up' && counter <= size**2);
  }
  }
  return final_array;
};
