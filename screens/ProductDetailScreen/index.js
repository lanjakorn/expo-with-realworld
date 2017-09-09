import React from 'react'
import PropTypes from 'prop-types'

import { ScrollView } from 'react-native'
import Product from './ProductContainer'
import { HeaderNavigation } from '@components'

const ProductDetailScreen = ( { navigation } ) =>
  <ScrollView>
    <Product navigation={navigation} />
  </ScrollView>

ProductDetailScreen.navigationOptions = ( { navigation } ) => ( {
  header: <HeaderNavigation navigation={navigation} title={'Products'} />,
} )

ProductDetailScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default ProductDetailScreen
