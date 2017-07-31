import firebase from 'firebase'
import { eventChannel } from 'redux-saga'
import { take, takeEvery, call, cancel, put, fork } from 'redux-saga/effects'
import { GET_CATEGORIES, INIT_CATEGORIES_SCREEN } from './types'
import { subscribeEvent } from './subscribeEvent'

function subscribe() {
  return eventChannel( emit => subscribeEvent.subscribe( emit ) )
}

function* read() {
  const channel = yield call( subscribe )
  while ( true ) {
    let action = yield take( channel )
    yield put( action )
  }
}

function* write( context, method, onError, ...params ) {
  try {
    yield call( [ context, method ], ...params )
  } catch ( error ) {
    yield put( onError( error ) )
  }
}

// function* watchGetCategories() {
//   console.log( 'eeeeee' )
//   yield* takeEvery( GET_CATEGORIES, getCategories )
// }
// const getPro = () => {
//   return firebase
//     .database()
//     .ref( 'categories' )
//     .once( 'value' )
//     .then( function( dataSnapshot ) {
//       console.log( dataSnapshot.value() )
//     } )
// }
function* watchGetCategories() {
  while ( true ) {
    let { payload } = yield take( GET_CATEGORIES )
    //subscribeEvent.path = 'categories'
    console.log( payload )
    // const job = yield fork( read )

    //yield take( [ authActions.SIGN_OUT_FULFILLED ] )
    // yield cancel( job )
  }
  // while ( yield take( GET_CATEGORIES ) ) {
  //   try {
  // console.log( 'fffff' )
  // console.log( firebase.database() )
  //    firebase
  // .database()
  // .ref( 'categories' )
  // .once( 'value' )
  // .then( function( dataSnapshot ) {
  //   console.log( dataSnapshot.value() )
  // } )
  // const products = yield call( getPro )
  // const job = yield fork( read )
  // console.log( 'job', job )
  // yield cancel( job )
  // console.log(
  //   firebase
  //     .database()
  //     .ref( 'categories' )
  //     .once( 'value' )
  //     .then( snap => console.log( snap.val() ) )
  // )
  //console.log( 'test', products )
  // const cate = yield call( getAll, 'Branch' )
  //   .once( 'value' )
  //   .then( snap => console.log( snap.val() ) )
  // console.log( 'cate', cate )
  //yield put( actions.postsReceived( posts ) )
  // } catch ( error ) {
  //yield put( actions.fetchPostsFailed( error ) )
  //}
  //}
}

function* watchInitCategoriesScreen() {
  while ( yield take( INIT_CATEGORIES_SCREEN ) ) {
    console.log( 'ffff' )
    subscribeEvent.path = 'categories'
    const job = yield fork( read )
    yield cancel( job )
  }
}

export default ( sagas = [ fork( watchGetCategories, watchInitCategoriesScreen ) ] )
