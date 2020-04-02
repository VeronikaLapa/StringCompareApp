const form = document.getElementById('string-form');

function onSubmit() {
  let s1 = document.getElementById('first-string').value;
  let s2 = document.getElementById('second-string').value;
  console.log(s1, s2);
  console.log(compareTwoStrings(s1, s2));
  changeResult(compareTwoStrings(s1, s2));
}
function createLetterNode(ch) {
  let newLetter = document.createElement('div');
  newLetter.classList.add('letter');
  newLetter.textContent = ch;
  return newLetter;
}
function changeResult(compareResult) {
  document.getElementsByClassName('difference__value')[0].innerHTML = compareResult.dif;
  [].slice
    .call(document.getElementsByClassName('string-result'))
    .forEach(stringResult => (stringResult.innerHTML = ''));
  const string1 = document.getElementById('first-result');
  const string2 = document.getElementById('second-result');
  for (let i = 0; i < compareResult.s1Result.length; ++i) {
    let newLetter1 = createLetterNode(compareResult.s1Result[i]);
    let newLetter2 = createLetterNode(compareResult.s2Result[i]);
    if (compareResult.s1Result[i] === compareResult.s2Result[i]) {
      newLetter1.classList.add('same-letter');
      newLetter2.classList.add('same-letter');
    }
    string1.appendChild(newLetter1);
    string2.appendChild(newLetter2);
  }
}
