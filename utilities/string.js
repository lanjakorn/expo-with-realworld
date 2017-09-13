import { compose, curry, prop } from 'ramda'

const getYoutubeId = url => {
  const [ , code ] = url.match( /v=([^&#]{5,})/ )
  return typeof code == 'string' ? code : url
}

const capitalize = str => {
  return str[ 0 ].toUpperCase() + str.substring( 1 )
}

const isNotEmpty = a => a.trim().length > 0

const hasCapitalLetter = a => /[A-Z]/.test( a )

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
  capitalize,
  formatMoney,
  getYoutubeId,
  hasCapitalLetter,
  isLengthGreaterThan,
  isNotEmpty,
}
