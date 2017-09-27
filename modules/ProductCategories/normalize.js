import * as mocks from 'mocks/categories'
import { categories } from 'utilities'

const normalizedSubChildCategories = ( data = {} ) => {
  return data.subChild.reduce(
    ( p, c ) => {
      return {
        ...p,
        subChildCategoriesById: {
          ...p.subChildCategoriesById,
          [ c.mainCategories ]: {
            ...mocks.subChildCategories(
              data.hasOwnProperty( 'isMFP' )
                ? {
                  name: c.mainCategories,
                  childCategory: data.mainCategories,
                  isMFP: data.isMFP,
                }
                : {
                  name: c.mainCategories,
                  childCategory: data.mainCategories,
                }
            ),
          },
        },
        subChildCategoryIds: [ ...p.subChildCategoryIds, c.mainCategories ],
      }
    },
    { subChildCategoriesById: {}, subChildCategoryIds: [] }
  )
}

const normalizedChildCategories = ( data = {} ) => {
  return (
    data &&
    data.childCategories &&
    data.childCategories.reduce(
      ( p, c ) => {
        const subChildCategories = c.subChild && normalizedSubChildCategories( c )

        return {
          ...p,
          childCategoriesById: {
            ...p.childCategoriesById,
            [ c.mainCategories ]: {
              ...mocks.childCategories( {
                name: c.mainCategories,
                category: data.mainCategories,
              } ),
            },
          },
          childCategoryIds: [ ...p.childCategoryIds, c.mainCategories ],
          subChildCategoriesById: categories.hasSubCategories(
            c.subChild,
            p.subChildCategoriesById,
            subChildCategories,
            'subChildCategoriesById'
          ),
          subChildCategoryIds: categories.hasSubCategories(
            c.subChild,
            p.subChildCategoryIds,
            subChildCategories,
            'subChildCategoryIds'
          ),
        }
      },
      {
        childCategoriesById: {},
        childCategoryIds: [],
        subChildCategoriesById: {},
        subChildCategoryIds: [],
      }
    )
  )
}

const normalizedCategories = ( data = {} ) =>
  Object.keys( data ).reduce(
    ( p, c ) => {
      const childCategorie = normalizedChildCategories( data[ c ] )
      return {
        ...p,
        categoriesById: {
          ...p.categoriesById,
          [ c ]: {
            ...mocks.categories( { name: data[ c ].mainCategories } ),
          },
        },
        categoryIds: [ ...p.categoryIds, c ],
        childCategoriesById: {
          ...p.childCategoriesById,
          ...childCategorie.childCategoriesById,
        },
        childCategoryIds: [
          ...p.childCategoryIds,
          ...childCategorie.childCategoryIds,
        ],
        subChildCategoriesById: {
          ...p.subChildCategoriesById,
          ...childCategorie.subChildCategoriesById,
        },
        subChildCategoryIds: [
          ...p.subChildCategoryIds,
          ...childCategorie.subChildCategoryIds,
        ],
      }
    },
    {
      categoriesById: {},
      categoryIds: [],
      childCategoriesById: {},
      childCategoryIds: [],
      subChildCategoriesById: {},
      subChildCategoryIds: [],
    }
  )

export { normalizedCategories }
