import { firebaseDb } from 'services/firebase'

const getProductsByProductCategory = query =>
  new Promise( resolve => {
    firebaseDb
      .ref( 'products' )
      .orderByChild( 'categories' )
      .startAt( query )
      .endAt( `${ query }\uf8ff` )
      .once( 'value', snap => {
        resolve( snap.val() )
      } )
  } )

const getProductsBySolutionCategory = solutionCategory =>
  new Promise( resolve => {
    firebaseDb
      .ref( 'products' )
      .orderByChild( 'solutionCategories' )
      .equalTo( solutionCategory )
      .once( 'value', snap => {
        resolve( snap.val() )
      } )
  } )

export { getProductsByProductCategory, getProductsBySolutionCategory }
