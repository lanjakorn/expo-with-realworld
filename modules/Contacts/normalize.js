// import * as mocks from 'mocks/contacts'

const normalizedContacts = ( data = {}, productContacts ) =>
  Object.keys( productContacts ).reduce(
    ( p, c ) => {
      return {
        ...p,
        contactsById: data[ productContacts[ c ] ]
          ? {
            ...p.contactsById,
            [ productContacts[ c ] ]: {
              ...data[ productContacts[ c ] ],
            },
          }
          : { ...p.contactsById },
        contactIds: [ ...p.contactIds, productContacts[ c ] ],
      }
    },
    {
      contactsById: {},
      contactIds: [],
    }
  )

export { normalizedContacts }
