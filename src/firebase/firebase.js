import * as firebase from 'firebase'

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
}

firebase.initializeApp(config)

const database = firebase.database()

export { firebase, database as default }

// database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val())  
// })

// database.ref('location')
//   .once('value')
//   .then((snapshot) => {
//     console.log(snapshot.val())
//   }).catch((e) => {
//     console.log('error fetching data', e)
//   })

// database.ref().set({
//   name: 'Colin Neil',
//   age: 29,
//   isSingle: false,
//   location: {
//     city: 'Royal oak',
//     country: 'United States'
//   },
// }).then(() => {
//   console.log('Data is saved.')
// }).catch((e) => {
//   console.log('This failed', e)
// })

// database.ref('isSingle').set(null)
//   .then(() => {
//     console.log('nothing')
//   })


// database.ref()
//   .remove()
//   .then(() => {
//   console.log('done')
// }).catch((e) => {
//   console.log(e)
// })