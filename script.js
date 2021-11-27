// generating random numbers
const randomNumber = (num) => {
    return Math.floor(Math.random() * num);
}

const myObject = {
    programLanguage: ['javascript', 'ruby', 'java', 'kotlin', 'php', 'go', 'c#'],
    level: ['Newbie', 'Intermidiate', 'Senior', 'Master', 'Gran Master'],
    tip: ['improve and improve', 'practice more', 'relax and learn']
}

// array to store full messages
let finalPrint = []

for(let item in myObject) {
let generator = randomNumber(myObject[item].length)

switch(item){
    case 'programLanguage':
        finalPrint.push(`You are learning ${myObject[item][generator]}`)
        break;
    case 'level':
        finalPrint.push(`You are now a ${myObject[item][generator]}`)
        break;
    case 'tip':
        finalPrint.push(`You should ${myObject[item][generator]}`)
        break
    default:
        finalPrint.push(`There's not enough info`)
}
}

function storeMessage(arr) {
    console.log(finalPrint.join('\n'))
}
storeMessage()
