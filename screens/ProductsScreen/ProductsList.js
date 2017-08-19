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
    this.props.setCurrentProduct( id )
    // this.props.initFaqsScreen()
    this.props.navigation.navigate( 'productDetail', id )
  }

  renderProducts() {
    return this.props.products.map( ( e, k ) =>
      <TouchableOpacity
        key={`product-touch-${ e.name }-${ k }`}
        onPress={() => this.onPressSelectProduct( e.id )}
      >
        <ProductsDetail
          key={`product-${ e.name }-${ k }`}
          productImage={object.getFirstByKey( { item: e.urls, key: 'imgs' } )}
          productHeading={e.name}
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
  products: selectors.productsNameSelector( state ),
} )

export default connect( mapStateToProps, combineAction() )( ProductsList )
