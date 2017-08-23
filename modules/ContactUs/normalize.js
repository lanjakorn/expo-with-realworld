const normalizedContactUs = ( data = {} ) =>
  Object.keys( data ).reduce(
    ( p, c ) => {
      return {
        ...p,
        contactUsById: {
          ...p.contactUsById,
          [ c ]: {
            ...data[ c ],
          },
        },
        contactUsIds: [ ...p.contactUsIds, c ],
      }
    },
    {
      contactUsById: {},
      contactUsIds: [],
    }
  )

export { normalizedContactUs }
