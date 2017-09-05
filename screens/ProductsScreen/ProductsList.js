import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions as faqsAction } from 'modules/Faqs'
import { actions as productsAction, selectors } from 'modules/Products'
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'

import ProductsDetail from './ProductsDetail'
import { object } from 'utilities'

import Spinner from 'react-native-loading-spinner-overlay'

const styles = StyleSheet.create( {
  container: {
    marginTop: 10,
  },
} )

class ProductsList extends Component {
  constructor( props ) {
    super( props )
  }

  async componentWillMount() {
    await this.props.initProductsScreen()
  }

  onPressSelectProduct = id => {
    this.props.setCurrentProductOfProductCategory( id )
    this.props.getFaqsByProduct( id )
    this.props.navigation.navigate( 'productDetail', {
      id: id,
      module: 'productCategories',
    } )
  }

  renderProducts() {
    const { products } = this.props

    return Object.keys( products ).map( ( e, k ) =>
      <TouchableOpacity
        key={`product-touch-${ products[ e ].name }-${ k }`}
        onPress={() => this.onPressSelectProduct( e )}
      >
        <ProductsDetail
          key={`product-${ products[ e ].name }-${ k }`}
          productImage={object.getFirstByKey( {
            item: products[ e ].urls,
            key: 'imgs',
          } )}
          productHeading={products[ e ].name}
        />
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <ScrollView>
        {!this.props.isFetching
          ? <View style={styles.container}>
            {this.renderProducts()}
          </View>
          : <View style={{ flex: 1 }}>
            <Spinner visible={true} />
          </View>}
      </ScrollView>
    )
  }
}

const combineAction = () => ( {
  ...faqsAction,
  ...productsAction,
} )

const mapStateToProps = state => ( {
  isFetching: state.products.isFetching,
  products: selectors.productFilterByProductCategoriesSelector( state ),
} )

export default connect( mapStateToProps, combineAction() )( ProductsList )
