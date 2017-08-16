import { firebaseDb } from 'services/firebase'

export default class FirebaseList {
  constructor( actions, modelClass ) {
    this._actions = actions
    this._modelClass = modelClass
  }

  get path() {
    return this._path
  }

  set path( value ) {
    this._path = value
  }

  push( value ) {
    return new Promise( ( resolve, reject ) => {
      firebaseDb
        .ref( this.path )
        .push( value, error => ( error ? reject( error ) : resolve() ) )
    } )
  }

  remove( key ) {
    return new Promise( ( resolve, reject ) => {
      firebaseDb
        .ref( `${ this.path }/${ key }` )
        .remove( error => ( error ? reject( error ) : resolve() ) )
    } )
  }

  update( key, value ) {
    return new Promise( ( resolve, reject ) => {
      firebaseDb
        .ref( `${ this.path }/${ key }` )
        .update( value, error => ( error ? reject( error ) : resolve() ) )
    } )
  }

  subscribe( emit ) {
    let ref = firebaseDb.ref( this.path )
    let initialized = false
    let list = {}

    ref.once( 'value', snap => {
      initialized = true
      emit( this._actions.onSuccess( { ...list, ...snap.val() } ) )
    } )

    return () => ref.off()
  }

  unwrapSnapshot( snapshot ) {
    let attrs = snapshot.val()
    attrs.key = snapshot.key
    return new this._modelClass( attrs )
  }
}
