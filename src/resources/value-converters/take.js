export class TakeValueConverter {
  toView(array, paramObj) {
    console.log('TK:');
    console.log(paramObj);
    return array.slice(paramObj.slice - paramObj.width, paramObj.slice);
  }
}
