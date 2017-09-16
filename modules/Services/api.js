import { firebaseDb } from 'services/firebase'

const getServices = () =>
  new Promise( resolve => {
    firebaseDb.ref( 'services' ).once( 'value', snap => {
      resolve( snap.val() )
    } )
  } )

export { getServices }
