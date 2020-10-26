function toLowerCase() {
    const res = nounArray.toLowerCase()
    console.log(nounArray)
}

function tellStory() {
// const nounArray = document.querySelector('#noun')
// const adjectiveArray = document.querySelector('#adjectives')
// const verbeArray = document.querySelector('#verbs')

const nounArray = document.getElementById("noun").value
document.getElementById("noun").value
const adjectiveArray = ["furry", "happy"]
const verbeArray = ["walk", "pump"]

    const myStory = `once upon a time there were four ${nounArray[0]}s named flopsy, mopsy, cotton-tail and peter.
    they lived with their mother underneath a ${nounArray[1]} near a ${adjectiveArray[0]} ${nounArray[2]}. 
    now, my dears, said ${adjectiveArray[1]} mrs. rabbit, you may go over the ${nounArray[3]} or around the ${nounArray[4]}, 
    but do not go into mr. mcGregor's ${nounArray[5]}.
    your father had an accident there and he was put in a ${nounArray[6]} by mrs mcGregor. 
    now ${verbeArray[0]} along, and dont get into mischief. 
    i am going ${verbeArray[1]}.`
document.querySelector('#story').innerHTML = myStory.toLowerCase().split()
}
