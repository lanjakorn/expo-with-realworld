const products = data => {
  return {
    ...data,
    description:
      'With nine models available, these hard workers form part of our flagship A3 colour Smart MFP range.',
    title:
      'Much more than a new range. It’s a whole new way to connect your business.',
    pros: [
      'Intuitive touch and swipe Smart Operation Panel Intuitive',
      'New Intel Processor increases productivity',
      'Human Detection Sensor',
      'Offers a range of great finishing options',
      'Professional output with banner print capability',
    ],
    tags: [
      'new',
      'copy',
      'print',
      'scan',
      'fax',

      'A3',
      'A4',

      'lan',
      'usb',
      'wifi',
    ],
    offer: {
      price: {
        currency: '$',
        value: 120,
      },
      salePrice: {
        currency: '$',
        value: 120,
      },
    },
    reviewScore: 12,
    reviewCount: 3,
    urls: {
      imgs: [
        'http://www.ricoh.co.th/sites/www.ricoh.co.th/files/SPC240DN_OK.jpg',
      ],
      videos: [ 'https://www.youtube.com/watch?v=2-RjMRP5IbI' ],
    },
  }
}

export { products }
