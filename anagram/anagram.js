//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (original, words) => {
  const original_small_case = original.toLowerCase();
  let output = [];
  let original_letters = objectCreation(original);
  for (let index = 0; index < words.length; index++) {
    let small_case_word_index = words[index].toLowerCase();
    if (small_case_word_index == original_small_case || words[index].length != original.length ) {
      continue; 
    };
    for (let word_index = 0; word_index < words[index].length;) {
      
      if (original_letters[small_case_word_index[word_index]] === undefined) {
        break;
      }
      else {
        let word_letters = objectCreation(words[index]);
        for (let key in word_letters) {
          if (original_letters[key] != word_letters[key]) {
            var flag = 'X';
            break;
          }
        };
        if (flag != 'X') {
          output.push(words[index]);
        }
      } break;
    }
  }
  return output;
};


function objectCreation(word) {
  word = word.toLowerCase();
  let wordObject = {};
  for (let index = 0; index < word.length; index++) {
    if (wordObject[word[index]] === undefined) {
      wordObject[word[index]] = 1;
    } else { wordObject[word[index]]++;}  
  };
  return wordObject;
}