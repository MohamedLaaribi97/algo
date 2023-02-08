function Disntinct(set1, set2) {
  var sum1 = 0;
  var sum2 = 0;
  var sum = 0;
  for (var i = 0; i < set1.length; i++) {
    var found = false;

    for (var j = 0; j < set2.length; j++) {
      if (set1[i] == set2[j]) {
        found = true;
        break;
      }
    }
    if (found == false) {
      sum1 += set1[i];
    }
  }
  for (var j = 0; j < set2.length; j++) {
    var found = false;

    for (var i = 0; i < set2.length; i++) {
      if (set2[j] == set1[i]) {
        found = true;
        break;
      }
    }
    if (found == false) {
      sum2 += set2[j];
    }
  }
  return (sum = sum1 + sum2);
}

console.log(Disntinct([3, 1, 7, 9], [2, 4, 1, 9, 3]));
