function SentenceTest(sentence) {
  let count = 0;
  let vowel = 0;
  let test = false;

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      if (test == true) {
        count++;
        test = false;
      }
    } else if (
      sentence[i] === "a" ||
      sentence[i] === "e" ||
      sentence[i] === "i" ||
      sentence[i] === "o" ||
      sentence[i] === "u"
    ) {
      vowel++;
      test = true;
    } else {
      test = true;
    }
  }

  if (test == true) {
    count++;
  }

  return { count, vowel };
}

let count;
console.log(SentenceTest("mohamed laaribi tunis GMC."));
