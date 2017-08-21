const normalizedSolutions = ( data = {} ) =>
  Object.keys( data ).reduce(
    ( p, c ) => {
      return {
        ...p,
        solutionsById: {
          ...p.solutionsById,
          [ c ]: {
            ...data[ c ],
          },
        },
        solutionIds: [ ...p.solutionIds, c ],
      }
    },
    {
      solutionsById: {},
      solutionIds: [],
    }
  )

export { normalizedSolutions }
