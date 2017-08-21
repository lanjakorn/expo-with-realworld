const normalizedFaqs = ( data = {} ) =>
  Object.keys( data ).reduce(
    ( p, c ) => {
      return {
        ...p,
        faqsById: {
          ...p.faqsById,
          [ c ]: {
            ...data[ c ],
          },
        },
        faqIds: [ ...p.faqIds, c ],
      }
    },
    {
      faqsById: {},
      faqIds: [],
    }
  )

export { normalizedFaqs }
