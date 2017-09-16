import { firebaseDb } from 'services/firebase'

const getFireBaseByRef = db =>
  new Promise( resolve => {
    firebaseDb.ref( db ).once( 'value', snap => {
      resolve( snap.val() )
    } )
  } )

export { getFireBaseByRef }
