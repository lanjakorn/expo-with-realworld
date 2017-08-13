const imageFactory = ( { data, image } ) => ( {
  ...data,
  image,
} )

const faq = data =>
  imageFactory( {
    data,
    image:
      'http://www.ricoh.co.th/sites/www.ricoh.co.th/files/styles/product_image_large/public/DD_5450_m1.jpg?itok=PRiUIRmV',
  } )

export { faq }
