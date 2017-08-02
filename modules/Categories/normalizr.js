import * as image from 'mocks/image'

const hasSubCategories = ( subCategories, oldCategories, key ) => {
  return subCategories
    ? {
      ...oldCategories,
      ...subCategories[ key ],
    }
    : { ...oldCategories }
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
            ...image.categories( { name: data[ c ].mainCategories } ),
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
              category: data.mainCategories,
            },
          },
          childCatogoriesIds: [ ...p.childCatogoriesIds, c.mainCategories ],
          subChildCatogoriesById: hasSubCategories(
            c.subChild,
            p.subChildCatogoriesById,
            'subChildCatogoriesById'
          ),
          subChildCatogoriesIds: hasSubCategories(
            c.subChild,
            p.subChildCatogoriesIds,
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

const normalizedSubChildCategories = ( data = {} ) => {
  return data.subChild.reduce(
    ( p, c ) => ( {
      ...p,
      subChildCatogoriesById: {
        ...p.subChildCatogoriesById,
        [ c.mainCategories ]: {
          childCategory: data.mainCategories,
        },
      },
      subChildCatogoriesIds: [ ...p.subChildCatogoriesIds, c.mainCategories ],
    } ),
    { subChildCatogoriesById: {}, subChildCatogoriesIds: [] }
  )
}

export { normalizedCategories }
