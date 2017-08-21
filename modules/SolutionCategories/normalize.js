const normalizedSolutionCategories = ( data = {} ) =>
  Object.keys( data ).reduce(
    ( p, c ) => {
      return {
        ...p,
        solutionCategoriesById: {
          ...p.solutionCategoriesById,
          [ c ]: {
            ...data[ c ],
          },
        },
        solutionCategoryIds: [ ...p.solutionCategoryIds, c ],
      }
    },
    {
      solutionCategoriesById: {},
      solutionCategoryIds: [],
    }
  )

export { normalizedSolutionCategories }
