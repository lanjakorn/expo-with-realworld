const getFirstByKey = ( { item, key } ) => {
  return item[ key ].slice( 0, 1 )[ 0 ]
}

export { getFirstByKey }
