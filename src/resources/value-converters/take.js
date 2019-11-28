export class TakeValueConverter {
  toView(array, count) {
    // übergebener Wert: schnippsel= 1 = [1,2,3]
    // nehme array
    // teile in stückchen
    // stücke jeweils maximal 3 groß

    return array.slice(count - 3, count);
  }
}
