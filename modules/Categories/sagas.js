import { all, fork, put, select, take } from 'redux-saga/effects'
import { SELECT_CHILD_CATEGORY } from './types'
import { setCurrentCategories } from './actions'
import { ga } from 'services'
import config from 'config'

import {
  currentCategoriesSelector,
  subChildCategoriesNameSelector,
} from './selectors'

function* watchSelectChildCategory() {
  while ( true ) {
    const { childCategory, navigation } = yield take( SELECT_CHILD_CATEGORY )
    yield put( setCurrentCategories( childCategory, 1 ) )
    const [ currentCategories, subChildCategories ] = yield all( [
      select( currentCategoriesSelector ),
      select( subChildCategoriesNameSelector ),
    ] )

    //TODO: example ga  trackEvent
    const tracker = new ga.Tracker(
      config.ga,
      config.app.name,
      config.app.version
    )

    tracker.trackEvent( 'product', 'select product category' )

    if ( subChildCategories.length === 0 ) {
      navigation.navigate( 'products', {
        childCategory: currentCategories[ 1 ],
      } )
    } else {
      navigation.navigate( 'subChildCategories', {
        childCategory: currentCategories[ 1 ],
      } )
    }
  }
}

export default [ fork( watchSelectChildCategory ) ]
