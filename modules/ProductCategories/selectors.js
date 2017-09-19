import { createSelector } from 'reselect'

const currentCategoriesSelector = state => state.productCategories.categories

const categoriesByIdSelector = state => state.productCategories.categoriesById
const categoryIdsSelector = state => state.productCategories.categoryIds
const isFetchingSelector = state => state.productCategories.isFetching

const childCategoriesByIdSelector = state =>
  state.productCategories.childCategoriesById
const childCategoryIdsSelector = state =>
  state.productCategories.childCategoryIds

const subChildCategoriesByIdSelector = state =>
  state.productCategories.subChildCategoriesById
const subChildCategoryIdsSelector = state =>
  state.productCategories.subChildCategoryIds

const categoriesNameSelector = createSelector( categoriesByIdSelector, items =>
  Object.keys( items ).reduce( ( p, c ) => [ ...p, items[ c ] ], [] )
)

const currentCategorieQuerySelector = createSelector(
  currentCategoriesSelector,
  curr => curr.join( '>' )
)

const currentChildCategorieQuerySelector = createSelector(
  currentCategoriesSelector,
  curr => curr.slice( 0, 2 ).join( '>' )
)

const childCategoriesNameSelector = createSelector(
  currentCategoriesSelector,
  childCategoriesByIdSelector,
  ( curr, items ) =>
    Object.keys( items ).length !== 0
      ? Object.keys( items ).reduce(
        ( p, c ) => ( items[ c ].category === curr[ 0 ] ? [ ...p, items[ c ] ] : p ),
        []
      )
      : []
)

const subChildCategoriesNameSelector = createSelector(
  currentCategoriesSelector,
  subChildCategoriesByIdSelector,
  ( curr, items ) =>
    Object.keys( items ).length !== 0
      ? Object.keys( items ).reduce(
        ( p, c ) => ( items[ c ].childCategory === curr[ 1 ] ? [ ...p, items[ c ] ] : p ),
        []
      )
      : []
)

export {
  categoriesNameSelector,
  categoryIdsSelector,
  childCategoriesNameSelector,
  childCategoryIdsSelector,
  currentCategorieQuerySelector,
  currentCategoriesSelector,
  currentChildCategorieQuerySelector,
  isFetchingSelector,
  subChildCategoriesNameSelector,
  subChildCategoryIdsSelector,
}
