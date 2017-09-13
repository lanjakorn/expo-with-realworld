const validate = ( values, validationRules ) => {
  const errors = Object.keys( values ).reduce( ( validatePrev, validateCurr ) => {
    return validationRules[ validateCurr ]
      ? {
        ...validatePrev,
        [ validateCurr ]: validationRules[ validateCurr ].reduce( ( p, c ) => {
          const [ func, msg ] = c
          const error = !func( values[ validateCurr ] ) ? msg : undefined
          return error ? [ ...p, error ] : p
        }, [] ),
      }
      : validatePrev
  }, {} )
  const pass = Object.keys( errors )
    .reduce( ( p, c ) => {
      return [ ...p, errors[ c ].length === 0 ]
    }, [] )
    .every( e => e === true )

  return { errors, pass }
}

export { validate }
