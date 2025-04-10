//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPaired = (pattern) => {
  const openings = [ '(', '[', '{'];
  const closings = [ ')', ']', '}'];
  let queue = [];
  let req_closing = closings[openings.indexOf(queue.length-1)];
  for (let index = 0; index < pattern.length; index++) {
    if (openings.includes(pattern[index])) {
      queue.push(pattern[index]);
      req_closing = closings[openings.indexOf(pattern[index])];
    }
    else if (pattern[index] == req_closing) {
      queue.pop();
      req_closing = closings[openings.indexOf(queue[queue.length-1])];
    }
    else if (pattern[index] != req_closing && closings.includes(pattern[index])) {
      return false;
    }
  };
  if (queue.length < 1) {
    return true;
  }
  else {
  return false;
  };
};