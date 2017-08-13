const getYoutubeId = url => {
  const code = url.match( /v=([^&#]{5,})/ )
  return typeof code[ 1 ] == 'string' ? code[ 1 ] : url
}

export { getYoutubeId }
