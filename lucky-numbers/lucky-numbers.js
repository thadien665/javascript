// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let first_number = '';
  for (let index = 0; index < array1.length; index++) {
    first_number += array1[index];
  }
  let second_number = '';
  for (let index = 0; index < array2.length; index++) {
    second_number += array2[index];
  }
  return Number(first_number) + Number(second_number);
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let number = String(value);
  let reversed_number = '';
  for (let index = number.length-1; index >= 0; index--) {
    reversed_number += number[index];    
  }
  if (number === reversed_number) {
    return true;
  }
  else {
  return false;
  }
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (input == null || input === '') {
    return 'Required field';
  }
  else if ( !Number(input) || input === '0' ) {
    return 'Must be a number besides 0';
  }
  else {
    return '';
  } ;
}
