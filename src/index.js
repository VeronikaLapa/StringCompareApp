function onSubmit() {
  document.getElementsByClassName('result')[0].hidden = false;
  const s1 = document.getElementById('first-string').value;
  const s2 = document.getElementById('second-string').value;
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
  const stringResult = document.getElementsByClassName('string-result')[0];
  stringResult.innerHTML = '';
  for (let i = 0; i < compareResult.s1Result.length; ++i) {
    const newLetter1 = createLetterNode(compareResult.s1Result[i]);
    const newLetter2 = createLetterNode(compareResult.s2Result[i]);
    if (compareResult.s1Result[i] === compareResult.s2Result[i]) {
      newLetter1.classList.add('same-letter');
      newLetter2.classList.add('same-letter');
    }
    const compareLetter = document.createElement('div');
    compareLetter.classList.add('letter-box');
    compareLetter.appendChild(newLetter1);
    compareLetter.appendChild(newLetter2);
    stringResult.appendChild(compareLetter);
  }
}
document.addEventListener('DOMContentLoaded', function() {
  document.getElementsByClassName('result')[0].hidden = true;
});
