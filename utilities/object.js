const getFirstByKey = ( { item, key } ) => {
  return item[ key ].slice( 0, 1 )[ 0 ]
}

const getLastByKey = ( { item, key } ) => {
  return item[ key ].slice( 0, item[ key ].length )[ item[ key ].length - 1 ]
}

export { getFirstByKey, getLastByKey }
