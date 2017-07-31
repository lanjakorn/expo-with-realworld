import config from 'config'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const firebaseApp = firebase.initializeApp( config.firebase )
const firebaseAuth = firebase.auth()
const firebaseDb = firebase.database()

export { firebaseApp, firebaseAuth, firebaseDb }
