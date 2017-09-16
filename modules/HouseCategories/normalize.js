const normalizedHouseCategories = data =>
  data && Object.keys( data ).length !== 0
    ? Object.keys( data ).reduce(
      ( p, c ) => ( {
        ...p,
        houseCategoriesById: {
          ...p.houseCategoriesById,
          [ c ]: data[ c ],
        },
        houseCategoryIds: [ ...p.houseCategoryIds, c ],
      } ),
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
