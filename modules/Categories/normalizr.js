const normalizedCategories = ( data = {} ) =>
  Object.keys( data ).reduce(
    ( p, c ) => {
      const childCategorie = normalizedChildCategories( data[ c ] )
      console.log( childCategorie )
      return {
        ...p,
        categoriesById: {
          ...p.categoriesById,
          [ c ]: data[ c ].mainCategories,
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
        console.log( c.subChild )
        const subChildCategories = c.subChild
          ? normalizedSubChildCategories( data[ c ] )
          : { ...p.subChildCatogoriesById, ...p.subChildCatogoriesIds }
        console.log( subChildCategories )
        return {
          ...p,
          childCatogoriesById: {
            ...p.childCatogoriesById,
            [ c.mainCategories ]: {
              category: data.mainCategories,
            },
          },
          childCatogoriesIds: [ ...p.childCatogoriesIds, c.mainCategories ],
          //   subChildCatogoriesById: c.subChild
          //     ? {
          //       ...p.subChildCatogoriesById,
          //       ...subChildCategories.subChildCatogoriesById,
          //     }
          //     : { ...p.subChildCatogoriesById },
          //   subChildCatogoriesIds: c.subChild
          //     ? [
          //       ...p.subChildCatogoriesIds,
          //       ...subChildCategories.subChildCatogoriesIds,
          //     ]
          //     : [ ...p.subChildCatogoriesIds ],
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
  console.log( data )
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
