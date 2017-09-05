import * as mocks from 'mocks/houseCategories'

const normalizedHouseCategories = data =>
  data && Object.keys( data ).length !== 0
    ? Object.keys( data ).reduce(
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
    : {
      houseCategoriesById: {},
      houseCategoryIds: [],
    }

export { normalizedHouseCategories }
