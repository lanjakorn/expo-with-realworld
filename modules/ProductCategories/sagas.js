import { all, fork, put, select, take } from 'redux-saga/effects'
import { SELECT_CHILD_CATEGORY } from './types'
import { setCurrentCategories } from './actions'
import { ga } from 'services'

import {
  currentCategoriesSelector,
  subChildCategoriesNameSelector,
} from './selectors'

const watchSelectChildCategory = function* watchSelectChildCategory() {
  while ( true ) {
    const { childCategory, navigation } = yield take( SELECT_CHILD_CATEGORY )
    yield put( setCurrentCategories( childCategory, 1 ) )
    const [ currentCategories, subChildCategories ] = yield all( [
      select( currentCategoriesSelector ),
      select( subChildCategoriesNameSelector ),
    ] )

    ga.trackEvent( {
      eventCategory: 'products',
      eventAction: 'select child category of products',
      eventLabel: currentCategories[ 1 ],
    } )

    if ( subChildCategories.length === 0 ) {
      navigation.navigate( 'products', {
        childCategory: currentCategories[ 1 ],
      } )
    } else {
      navigation.navigate( 'productSubChildCategories', {
        childCategory: currentCategories[ 1 ],
      } )
    }
  }
}

export default [ fork( watchSelectChildCategory ) ]
