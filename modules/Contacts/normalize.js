// import * as mocks from 'mocks/contacts'

// const normalizedContacts = ( data = {}, productContacts ) =>
//   Object.keys( productContacts ).reduce(
//     ( p, c ) => {
//       return {
//         ...p,
//         contactsById: data[ productContacts[ c ] ]
//           ? {
//             ...p.contactsById,
//             [ productContacts[ c ] ]: {
//               ...data[ productContacts[ c ] ],
//             },
//           }
//           : { ...p.contactsById },
//         contactIds: [ ...p.contactIds, productContacts[ c ] ],
//       }
//     },
//     {
//       contactsById: {},
//       contactIds: [],
//     }
//   )

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
