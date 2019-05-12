
//Object Destructuring

// const person = {
//    name: 'Colin',
//    age: 29,
//    location: {
//       city: 'Detroit',
//       temp: 20
//    }
// }

// const { name: firstName = 'anonymous', age } = person
// console.log(`${firstName} is ${age}.`)

// const { city, temp: temperature } = person.location
// if (city && temperature) {
//    console.log(`It's ${temperature} in ${city}`)
// }

// const book = {
//    title: 'Ego is the enemy',
//    author: 'Ryan Holiday',
//    publisher: {
//       name: 'Penguin'
//    }
// }

// const { name: publisherName = 'Self-Published'} = book.publisher
// console.log(publisherName) // Penguin, Self-published default


// Array Destructuring.

const address = ['918 Woodlawn Ave','Royal Oak', 'Michigan', '48073']
const [, city, state = 'New York'] = address
console.log(`You are in ${city}, ${state}.`)

const item = ['Coffee (hot)','$2.00', '$2.50', '2.74']
const [itemName,, mediumPrice] = item
console.log(`A medium ${itemName} costs ${mediumPrice}.`)