// zadanie 1
const people = [
  {
    firstName: false,
    lastName: 2,
  },
  {
    firstName: 'Roman',
    lastName: 'Kowalski',
  },

  {
    firstName: 'Halina',
    lastName: 'Malina',
  },
  {
    firstName: 'B',
    lastName: '22',
  },
  {
    firstName: 'Jan',
    lastName: 'Nowak',
  },
  {
    firstName: 'Kamil',
    lastName: null,
  },
]

function isString(item) {
  return typeof item === 'string'
}

function isLongerThanThree(item) {
  return item.length >= 3
}

const createNickname = arr => {
  return (nickames = arr.forEach(element => {
    if (
      isString(element.firstName) &&
      isString(element.lastName) &&
      isLongerThanThree(element.firstName) &&
      isLongerThanThree(element.lastName)
    ) {
      let partOfFirstName = element.firstName
        .split('')
        .reverse()
        .join('')
        .slice(0, 3)
      let partOfLastName = element.lastName
        .slice(0, 3)
        .split('')
        .reverse()
        .join('')

      let nickName = (partOfFirstName + partOfLastName).toLowerCase()
      let firstChar = nickName.charAt(0).toUpperCase()
      let restOfNickName = nickName.slice(1)
      nickName = firstChar + restOfNickName
      element.nickName = nickName
    }
  }))
}

createNickname(people)

//Zadanie 2
const peopleWithNickName = people.filter(person => person.nickName)

function checkLength(arr) {
  arr.forEach(element => {
    let firstNameLength = element.firstName.length
    let lastNameLength = element.lastName.length
    let ageFromNames = firstNameLength + lastNameLength

    if (ageFromNames % 2 === 0) {
      return (element.age = ageFromNames)
    } else {
      let keysLength = []
      Object.keys(element).forEach(key => keysLength.push(key.length))
      let ageFromKeys = keysLength.reduce((acc, item) => acc + item, 0)
      return Math.round((element.age = ageFromKeys))
    }
  })
}

checkLength(peopleWithNickName)

//zadanie 3
const makeValues = arr => {
  return Object.values(arr).join('').toLocaleLowerCase().split('')
}

const countValues = (arr, obj) => {
  let biggestValue = []
  let counts = {}

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i]
    counts[value] = counts[value] ? counts[value] + 1 : 1
    biggestValue.push(counts[value])
  }

  let orderedValues = biggestValue.sort().reverse()
  let entries = Object.entries(counts)
  let orderedChars = []
  entries.forEach(key => {
    if (key[1] === orderedValues[0]) {
      obj.letter = key[0]
      obj.count = key[1]
      for (let i = 0; orderedValues.length; i++) {
        if ((orderedValues[0] = orderedValues[1])) {
          orderedChars.push(key[0])
          orderedChars.sort()
          obj.letter = orderedChars[0]
          break
        }
      }
    }
  })
}

for (let i = 0; i < peopleWithNickName.length; i++) {
  const letters = makeValues(peopleWithNickName[i])
  const mostCommonChar = {}
  countValues(letters, mostCommonChar)
  peopleWithNickName[i].mostCommonLetter = mostCommonChar
}

console.log(peopleWithNickName)
