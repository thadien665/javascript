/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus (remainingTime) {
    if (remainingTime == 0) {
      return 'Lasagna is done.';
    } 
    if (remainingTime != 0 && Number(remainingTime)) {
      return 'Not done, please wait.';
    }
    else {
      return 'You forgot to set the timer.';
    } 
  }
  
  export function preparationTime (layers, time = 2) {
    return layers.length * time;
  }
  
  export function quantities (layers) {
    let ingredients = {
      noodles: 0,
      sauce: 0
    };
    
    for (let index = 0; index < layers.length; index++) {
      if (layers[index] == 'noodles') {
        ingredients.noodles += 50;
      }
      else if (layers[index] == 'sauce') {
        ingredients.sauce += 0.2;
      }
    }
    return ingredients;
  }
  
  export function addSecretIngredient (friendsList, myList) {
    myList.push(friendsList[friendsList.length-1]);
  }
  
  export function scaleRecipe (recipe, portions) {
    let scaledRecipe = {};
    for (let key in recipe) {
      let value = recipe[key];
      scaledRecipe[key] = value * portions / 2;
    }
    return scaledRecipe;
  }