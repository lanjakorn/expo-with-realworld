const normalizedSolutions = data =>
  data && Object.keys( data ).length !== 0
    ? Object.keys( data ).reduce(
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
    : {
      solutionsById: {},
      solutionIds: [],
    }

export { normalizedSolutions }
