const imageFactory = ( { data, urls } ) => ( {
  ...data,
  urls,
} )

const houseCategories = data =>
  imageFactory( {
    data,
    urls: {
      imgs: [ 'https://image.ibb.co/ifAA2F/business_item_1.png' ],
      videos: [ 'https://www.youtube.com/watch?v=HN9P8uHEtUg' ],
    },
  } )

export { houseCategories }
