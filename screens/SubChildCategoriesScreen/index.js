import React from 'react'
import PropTypes from 'prop-types'
import { nav } from 'utilities'

import CategoriesList from './CategoriesList'
import { HeaderNavigation } from '@components'

const SubChildCategoriesScreen = ( { navigation } ) =>
  <CategoriesList navigation={navigation} />

SubChildCategoriesScreen.navigationOptions = ( { navigation } ) => ( {
  header: (
    <HeaderNavigation
      navigation={navigation}
      title={nav.getNavigationParam( navigation, 'childCategory' )}
    />
  ),
} )

SubChildCategoriesScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default SubChildCategoriesScreen
