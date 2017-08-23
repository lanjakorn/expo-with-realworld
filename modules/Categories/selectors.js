import { createSelector } from 'reselect'

const currentCategoriesSelector = state => state.categories.categories

const categoriesByIdSelector = state => state.categories.categoriesById
const categoryIdsSelector = state => state.categories.categoryIds

const childCategoriesByIdSelector = state =>
  state.categories.childCategoriesById
const childCategoryIdsSelector = state => state.categories.childCategoryIds

const subChildCategoriesByIdSelector = state =>
  state.categories.subChildCategoriesById
const subChildCategoryIdsSelector = state =>
  state.categories.subChildCategoryIds

const categoriesNameSelector = createSelector( categoriesByIdSelector, items =>
  Object.keys( items ).reduce( ( p, c ) => [ ...p, items[ c ] ], [] )
)

const currentCategorieQuerySelector = createSelector(
  currentCategoriesSelector,
  curr => curr.join( '>' )
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
  subChildCategoriesNameSelector,
  subChildCategoryIdsSelector,
}
