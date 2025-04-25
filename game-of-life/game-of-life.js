//
// This is only a SKELETON file for the 'Conway's Game of Life' exercise. It's been provided
// as a convenience to get you started writing code faster.
//

export class GameOfLife {
  constructor(matrix = []) {
    this.matrix = matrix;
  }

  tick() {}

  state() {
    const matrix = this.matrix;
    var result = [];
    if (matrix.length === 0) {
      return result;
    }
    let counter = 0;
    result = matrix.map((row, index_x) => 
      row.map((column, index_y) => {
        counter = 0;
        for (let ind_x = index_x-1; ind_x <= index_x+1; ind_x++) {
          if (matrix[ind_x] !== undefined)
          for (let ind_y = index_y-1; ind_y <= index_y+1; ind_y++) {
            //if (matrix[ind_x] !== undefined)
            if (matrix[ind_x]?.[ind_y] !== undefined)
                if (index_x === ind_x && index_y === ind_y)
                  continue;
                else                
                  if (matrix[ind_x][ind_y] > 0) counter+=1;
          }
        }
    if (matrix[index_x][index_y] === 1 && ( counter === 2 || counter === 3)) return 1;
    if (matrix[index_x][index_y] === 0 && counter === 3) return 1;
    else return 0;
      }
      )
    )
    let test = result[0][1];
    return result;
  }
}
