const normalizedContacts = ( data = {} ) =>
  Object.keys( data ).reduce(
    ( p, c ) => {
      return {
        ...p,
        contactsById: {
          ...p.contactsById,
          [ c ]: {
            ...data[ c ],
          },
        },
        contactIds: [ ...p.contactIds, c ],
      }
    },
    {
      contactsById: {},
      contactIds: [],
    }
  )

export { normalizedContacts }
