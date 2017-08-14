import * as mocks from 'mocks/categories'
import { categories } from 'utilities'

const normalizedSubChildCategories = ( data = {} ) => {
  return data.subChild.reduce(
    ( p, c ) => ( {
      ...p,
      subChildCatogoriesById: {
        ...p.subChildCatogoriesById,
        [ c.mainCategories ]: {
          ...mocks.subChildCategories( {
            name: c.mainCategories,
            childCategory: data.mainCategories,
          } ),
        },
      },
      subChildCatogoriesIds: [ ...p.subChildCatogoriesIds, c.mainCategories ],
    } ),
    { subChildCatogoriesById: {}, subChildCatogoriesIds: [] }
  )
}

const normalizedChildCategories = ( data = {} ) => {
  return (
    data &&
    data.childCatogories &&
    data.childCatogories.reduce(
      ( p, c ) => {
        const subChildCategories = c.subChild && normalizedSubChildCategories( c )

        return {
          ...p,
          childCatogoriesById: {
            ...p.childCatogoriesById,
            [ c.mainCategories ]: {
              ...mocks.childCategories( {
                name: c.mainCategories,
                category: data.mainCategories,
              } ),
            },
          },
          childCatogoriesIds: [ ...p.childCatogoriesIds, c.mainCategories ],
          subChildCatogoriesById: categories.hasSubCategories(
            c.subChild,
            p.subChildCatogoriesById,
            subChildCategories,
            'subChildCatogoriesById'
          ),
          subChildCatogoriesIds: categories.hasSubCategories(
            c.subChild,
            p.subChildCatogoriesIds,
            subChildCategories,
            'subChildCatogoriesIds'
          ),
        }
      },
      {
        childCatogoriesById: {},
        childCatogoriesIds: [],
        subChildCatogoriesById: {},
        subChildCatogoriesIds: [],
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
        childCatogoriesById: {
          ...p.childCatogoriesById,
          ...childCategorie.childCatogoriesById,
        },
        childCatogoriesIds: [
          ...p.childCatogoriesIds,
          ...childCategorie.childCatogoriesIds,
        ],
        subChildCatogoriesById: {
          ...p.subChildCatogoriesById,
          ...childCategorie.subChildCatogoriesById,
        },
        subChildCatogoriesIds: [
          ...p.subChildCatogoriesIds,
          ...childCategorie.subChildCatogoriesIds,
        ],
      }
    },
    {
      categoriesById: {},
      categoryIds: [],
      childCatogoriesById: {},
      childCatogoriesIds: [],
      subChildCatogoriesById: {},
      subChildCatogoriesIds: [],
    }
  )

export { normalizedCategories }
