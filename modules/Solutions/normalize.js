// import * as mocks from 'mocks/solutions'

const normalizedSolutions = ( data = {}, houseCategoriesSolutions ) =>
  Object.keys( houseCategoriesSolutions ).reduce(
    ( p, c ) => {
      return {
        ...p,
        solutionsById: data[ houseCategoriesSolutions[ c ] ]
          ? {
            ...p.solutionsById,
            [ houseCategoriesSolutions[ c ] ]: {
              ...data[ houseCategoriesSolutions[ c ] ],
            },
          }
          : { ...p.solutionsById },
        solutionIds: [ ...p.solutionIds, houseCategoriesSolutions[ c ] ],
      }
    },
    {
      solutionsById: {},
      solutionIds: [],
    }
  )

export { normalizedSolutions }
