const normalizedSolutionCategories = data =>
  data && Object.keys( data ).length !== 0
    ? Object.keys( data ).reduce(
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
    : {
      solutionCategoriesById: {},
      solutionCategoryIds: [],
    }

export { normalizedSolutionCategories }
