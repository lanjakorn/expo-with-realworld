const imageFactory = ( { data, urls, sulotions, caseStudies } ) => ( {
  ...data,
  urls,
  sulotions,
  caseStudies,
} )

const houseCategories = data =>
  imageFactory( {
    data,
    urls: {
      imgs: [
        'https://image.ibb.co/ifAA2F/business_item_1.png',
        'https://image.ibb.co/dWZy6a/custom_hotel_lobby.jpg',
      ],
      videos: [ 'https://www.youtube.com/watch?v=HN9P8uHEtUg' ],
    },
    sulotions: {
      sulotionsKey1: {
        title: 'Managed Print Services',
        description:
          'Ricoh Managed Print Services (MPS) encompass the three fundamental elements of document management.',
      },
      sulotionsKey2: {
        title: 'Managed Print Services',
        description:
          'Ricoh Managed Print Services (MPS) encompass the three fundamental elements of document management.',
      },
      sulotionsKey3: {
        title: 'Managed Print Services',
        description:
          'Ricoh Managed Print Services (MPS) encompass the three fundamental elements of document management.',
      },
    },
    caseStudies: {
      caseStudies1: {
        title: 'Gearing toward Designing Solutions ',
        description:
          'The Ricoh Group structures R&D (Research and Development) so as to obtain customer knowledge, anticipating the future based on global economic, social and technological trends.',
      },
    },
  } )

export { houseCategories }
