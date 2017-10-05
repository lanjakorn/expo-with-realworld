import { compose, curry, prop } from 'ramda'

const isNotEmpty = a => a.trim().length > 0

const hasCapitalLetter = a => /[A-Z]/.test( a )

const hasCapitalize = str => str[ 0 ].toUpperCase() + str.substring( 1 )

const hasSpaceCapitalize = str =>
  str
    .split( '' )
    .map( e => ( hasCapitalLetter( e ) ? ` ${ e }` : e ) )
    .join( '' )

const isGreaterThan = curry( ( len, a ) => a > len )

const isLengthGreaterThan = len => compose( isGreaterThan( len ), prop( 'length' ) )

const formatMoney = ( {
  num,
  digit = 2,
  symbol = '$',
  symbolBack = false,
  showDigit = true,
  showSymbol = true,
} ) => {
  const [ number, decimal = '00' ] = num.toFixed( digit ).split( '.' )
  const money = number
    .split( '' )
    .reverse()
    .reduce(
      ( p, c, k ) => ( c == '-' ? p : c + ( k && !( k % 3 ) ? ',' : '' ) + p ),
      ''
    )
  const moneyWithDigit = showDigit ? money + '.' + decimal : money + ''

  if ( !showSymbol ) {
    return moneyWithDigit
  }
  return symbolBack
    ? `${ moneyWithDigit } ${ symbol }`
    : `${ symbol } ${ moneyWithDigit }`
}

export {
  formatMoney,
  hasCapitalize,
  hasCapitalLetter,
  hasSpaceCapitalize,
  isLengthGreaterThan,
  isNotEmpty,
}
