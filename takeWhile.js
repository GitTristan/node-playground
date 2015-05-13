var array = [1,2,3,4,5,6]

var takeWhile = function(array, takingFn) {
  var result = [];
  for ( i = 0; i > array.length; i++) {
    takingFn(array[i]);
  }
  result.push[i];
};

console.log(takeWhile(array, isEven));
