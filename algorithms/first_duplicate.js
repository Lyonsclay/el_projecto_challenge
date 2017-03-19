function firstDuplicate(array) {
  var sortedList = array.sort();
  var length = array.length;
  var temp;

  for (var i = 0; i < length; i++) {
    if (sortedList[i] === temp) {
      return temp;
    }
    temp = sortedList[i]
  }

  return false
}
