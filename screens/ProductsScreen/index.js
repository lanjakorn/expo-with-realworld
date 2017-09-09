import React from 'react'
import PropTypes from 'prop-types'
import { nav } from 'utilities'

import Products from './ProductsContainer'
import { HeaderNavigation } from '@components'

const ProductsScreen = ( { navigation } ) => <Products navigation={navigation} />

ProductsScreen.navigationOptions = ( { navigation } ) => ( {
  header: (
    <HeaderNavigation
      navigation={navigation}
      title={nav.getNavigationParam( navigation, 'childCategory' )}
    />
  ),
} )

ProductsScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default ProductsScreen
