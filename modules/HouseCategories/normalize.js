import * as mocks from 'mocks/houseCategories'

const normalizedHouseCategories = ( data = {} ) =>
  Object.keys( data ).reduce(
    ( p, c ) => {
      return {
        ...p,
        houseCategoriesById: {
          ...p.houseCategoriesById,
          [ c ]: {
            ...mocks.houseCategories( data[ c ] ),
          },
        },
        houseCategoryIds: [ ...p.houseCategoryIds, c ],
      }
    },
    {
      houseCategoriesById: {},
      houseCategoryIds: [],
    }
  )

export { normalizedHouseCategories }
