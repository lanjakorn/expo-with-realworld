const getFirstByKey = ( { item, key } ) => {
  return item[ key ].slice( 0, 1 )[ 0 ]
}

const getLastByKey = ( { item, key } ) => {
  return item[ key ].slice( 0, item[ key ].length )[ item[ key ].length - 1 ]
}

const swapSpread = ( ...sources ) => {
  return {
    props: sources.slice( 0, sources.length - 1 ),
    obj: sources.slice( 0, sources.length )[ sources.length - 1 ],
  }
}

const omit = ( ...sources ) => {
  const { obj, props } = swapSpread( ...sources )
  return props.reduce( ( p, c ) => {
    const { [ c ]: omitProp, ...clean } = p
    return clean
  }, obj )
}

const isDeepEmpty = ( array, ...ignoreKey ) => {
  console.log( ignoreKey )
  if ( Object.keys( array ).length === 0 ) return true

  return Object.keys( omit( ...ignoreKey, array ) ).filter( e => {
    return array[ e ].length !== 0 && e !== ignoreKey
  } ).length === 0
    ? true
    : false
}

export { getFirstByKey, getLastByKey, swapSpread, omit, isDeepEmpty }
