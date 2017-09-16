import { firebaseDb } from 'services/firebase'

const addFaq = faq =>
  new Promise( resolve => {
    firebaseDb.ref( 'faqs' ).push().set( faq, error => {
      if ( error ) {
      } else {
        resolve( true )
      }
    } )
  } )

const getFaqsByProduct = productId =>
  new Promise( resolve => {
    firebaseDb
      .ref( 'faqs' )
      .orderByChild( 'productId' )
      .equalTo( productId )
      .once( 'value', snap => {
        resolve( snap.val() )
      } )
  } )

const getFaqsBySolutionCategory = solutionCategoryId =>
  new Promise( resolve => {
    firebaseDb
      .ref( 'faqs' )
      .orderByChild( 'solutionCategoryId' )
      .equalTo( solutionCategoryId )
      .once( 'value', snap => {
        resolve( snap.val() )
      } )
  } )

export { addFaq, getFaqsByProduct, getFaqsBySolutionCategory }
