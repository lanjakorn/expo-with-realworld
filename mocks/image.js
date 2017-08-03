const imageFactory = ( { data, image } ) => ( {
  ...data,
  image,
} )

const categories = data =>
  imageFactory( {
    data,
    image:
      'http://www.ricoh.co.th/sites/www.ricoh.co.th/files/styles/product_image_large/public/DD_5450_m1.jpg?itok=PRiUIRmV',
  } )

const childCategories = data =>
  imageFactory( {
    data,
    image:
      'http://www.ricoh.co.th/sites/www.ricoh.co.th/files/styles/product_image_large/public/SP3600SF_3610SF_m2_0.jpg?itok=8PSsRbgK',
  } )

const subChildCategories = data =>
  imageFactory( {
    data,
    image:
      'http://www.ricoh.co.th/sites/www.ricoh.co.th/files/cat_banner_fax.jpg',
  } )

const products = data => {
  return {
    ...data,
    urls: {
      imgs: [
        'http://www.ricoh.co.th/sites/www.ricoh.co.th/files/SPC240DN_OK.jpg',
      ],
      videos: [ 'https://www.youtube.com/watch?v=2-RjMRP5IbI' ],
    },
  }
}

export { categories, childCategories, subChildCategories, products }
