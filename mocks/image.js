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
    description:
      'With nine models available, these hard workers form part of our flagship A3 colour Smart MFP range.',
    title:
      'Much more than a new range. It’s a whole new way to connect your business.',
    pros: [
      'Intuitive touch and swipe Smart Operation Panel',
      'New Intel Processor increases productivity',
      'Human Detection Sensor',
      'Offers a range of great finishing options',
      'Professional output with banner print capability',
    ],
    tags: [
      'http://www.ricoh.co.th/sites/www.ricoh.co.th/files/icon_func_new_0.gif',
      'http://www.ricoh.co.th/sites/www.ricoh.co.th/files/icon_func_copy.gif',
      'http://www.ricoh.co.th/sites/www.ricoh.co.th/files/icon_func_print.gif',
      'http://www.ricoh.co.th/sites/www.ricoh.co.th/files/icon_func_scan_0.gif',
      'http://www.ricoh.co.th/sites/www.ricoh.co.th/files/icon_func_fax.gif',

      'http://www.ricoh.co.th/sites/www.ricoh.co.th/files/icon_func_A3.gif',
      'http://www.ricoh.co.th/sites/www.ricoh.co.th/files/icon_func_A4.gif',

      'http://www.ricoh.co.th/sites/www.ricoh.co.th/files/icon_spec_lan.gif',
      'http://www.ricoh.co.th/sites/www.ricoh.co.th/files/icon_spec_usb_0.gif',
      'http://www.ricoh.co.th/sites/www.ricoh.co.th/files/icon_spec_wifi.gif',
    ],
    urls: {
      imgs: [
        'http://www.ricoh.co.th/sites/www.ricoh.co.th/files/SPC240DN_OK.jpg',
      ],
      videos: [ 'https://www.youtube.com/watch?v=2-RjMRP5IbI' ],
    },
  }
}

export { categories, childCategories, subChildCategories, products }
