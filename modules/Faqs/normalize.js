// import * as mocks from 'mocks/faqs'

const normalizedFaqs = ( data = {}, productFaqs ) =>
  Object.keys( productFaqs ).reduce(
    ( p, c ) => {
      return {
        ...p,
        faqsById: data[ productFaqs[ c ] ]
          ? {
            ...p.faqsById,
            [ productFaqs[ c ] ]: {
              ...data[ productFaqs[ c ] ],
            },
          }
          : { ...p.faqsById },
        faqIds: [ ...p.faqIds, productFaqs[ c ] ],
      }
    },
    {
      faqsById: {},
      faqIds: [],
    }
  )

export { normalizedFaqs }
