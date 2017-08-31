const getYoutubeId = url => {
  const [ , code ] = url.match( /v=([^&#]{5,})/ )
  return typeof code == 'string' ? code : url
}

const capitalize = str => {
  return str[ 0 ].toUpperCase() + str.substring( 1 )
}

const paragraph = ( str ) => `   ${ str }`

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

export { getYoutubeId, formatMoney, capitalize, paragraph }
