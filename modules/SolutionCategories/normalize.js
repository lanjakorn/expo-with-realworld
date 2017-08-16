// import * as mocks from 'mocks/solutions'

const normalizedSolutionCategories = (
  data = {},
  solutionCategoriesOfsolution
) =>
  Object.keys( solutionCategoriesOfsolution ).reduce(
    ( p, c ) => {
      return {
        ...p,
        solutionCategoriesById: data[ solutionCategoriesOfsolution[ c ] ]
          ? {
            ...p.solutionCategoriesById,
            [ solutionCategoriesOfsolution[ c ] ]: {
              ...data[ solutionCategoriesOfsolution[ c ] ],
            },
          }
          : { ...p.solutionsById },
        solutionCategoryIds: [
          ...p.solutionCategoryIds,
          solutionCategoriesOfsolution[ c ],
        ],
      }
    },
    {
      solutionCategoriesById: {},
      solutionCategoryIds: [],
    }
  )

export { normalizedSolutionCategories }
