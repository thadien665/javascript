//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, earthAge) => {
  const earthYearInSeconds = 31557600;
  switch (planet) {
    case 'mercury':
        return Number((earthAge / earthYearInSeconds / 0.2408467).toFixed(2));
    case 'venus':
        return Number((earthAge / earthYearInSeconds / 0.61519726).toFixed(2));
    case 'mars':
      return Number((earthAge / earthYearInSeconds / 1.8808158).toFixed(2));
    case 'jupiter':
      return Number((earthAge / earthYearInSeconds / 11.862615).toFixed(2));
    case 'saturn':
      return Number((earthAge / earthYearInSeconds / 29.447498).toFixed(2));
    case 'uranus':
      return Number((earthAge / earthYearInSeconds / 84.016846).toFixed(2));
    case 'neptune':
      return Number((earthAge / earthYearInSeconds / 164.79132).toFixed(2));           
    default:
      return Number((earthAge / earthYearInSeconds).toFixed(2));
  };
};
