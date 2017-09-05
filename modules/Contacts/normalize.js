const normalizedContacts = data =>
  data && Object.keys( data ).length !== 0
    ? Object.keys( data ).reduce(
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
    : {
      contactsById: {},
      contactIds: [],
    }

export { normalizedContacts }
