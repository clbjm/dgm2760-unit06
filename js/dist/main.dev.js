"use strict";

function toLowerCase() {
  var res = nounArray.toLowerCase();
  console.log(nounArray);
}

function tellStory() {
  // const nounArray = document.querySelector('#noun')//lowercase string split()
  // const adjectiveArray = document.querySelector('#adjectives')
  // const verbeArray = document.querySelector('#verbs')
  var nounArray = ["Horse", "Bridge", "Office", "Cow", "Human", "Rake", "Truck"];
  var adjectiveArray = ["Hairy", "Scary", "Edible"];
  var verbeArray = ["Run", "Dump"];
  var myStory = "once upon a time there were four ".concat(nounArray[0], "s named flopsy, mopsy, cotton-tail and peter.\n    they lived with their mother underneath a ").concat(nounArray[1], " near a ").concat(adjectiveArray[0], " ").concat(nounArray[2], ". \n    now, my dears, said ").concat(adjectiveArray[1], " mrs. rabbit, you may go over the ").concat(nounArray[3], " or around the ").concat(nounArray[4], ", \n    but do not go into mr. mcGregor's ").concat(nounArray[5], ".\n    your father had an accident there and he was put in a ").concat(nounArray[6], " by mrs mcGregor. \n    now ").concat(verbeArray[0], " along, and dont get into mischief. \n    i am going ").concat(verbeArray[1], ".");
  document.querySelector('#story').innerHTML = myStory.toLowerCase().split();
}
//# sourceMappingURL=main.dev.js.map
