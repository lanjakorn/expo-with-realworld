const normalizedFaqs = data =>
  data && Object.keys( data ).length !== 0
    ? Object.keys( data ).reduce(
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
    : {
      faqsById: {},
      faqIds: [],
    }

export { normalizedFaqs }
