import React from 'react'
import PropTypes from 'prop-types'
import { nav } from 'utilities'

import Categories from './CategoriesContainer'
import { HeaderNavigation } from '@components'

const CategoriesScreen = ( { navigation } ) =>
  <Categories navigation={navigation} />

CategoriesScreen.navigationOptions = ( { navigation } ) => ( {
  header: (
    <HeaderNavigation
      navigation={navigation}
      title={nav.getNavigationParam( navigation, 'category' )}
    />
  ),
} )

CategoriesScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default CategoriesScreen
