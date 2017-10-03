const getYoutubeId = url => {
  const [ , code ] = url.match( /v=([^&#]{5,})/ )
  return typeof code == 'string' ? code : url
}

const youtubeVideoUrl = videoUrl =>
  `https://www.youtube.com/embed/${ getYoutubeId(
    videoUrl
  ) }?version=3&enablejsapi=1&rel=0&autoplay=1&showinfo=0&controls=1&modestbranding=0`

export { getYoutubeId, youtubeVideoUrl }
