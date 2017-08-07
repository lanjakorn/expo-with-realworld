import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions as productsAction, selectors } from 'modules/Products'

import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import ProductsDetail from './ProductsDetail'
import { Colors } from 'constants'
import { FontAwesome } from '@expo/vector-icons'
import { object } from 'utilities'

import Spinner from 'react-native-loading-spinner-overlay'

class ProductsList extends Component {
  constructor( props ) {
    super( props )
  }

  async componentWillMount() {
    await this.props.initProductsScreen()
  }

  onPressSelectProduct = id => {
    this.props.setCurrentProduct( id )
    this.props.navigation.navigate( 'productDetail', id )
  }

  renderStories() {
    return this.props.products.map( ( e, k ) =>
      <TouchableOpacity
        key={`product-touch-${ e.name }-${ k }`}
        onPress={() => this.onPressSelectProduct( e.id )}
      >
        <ProductsDetail
          key={`product-${ e.name }-${ k }`}
          StoryImage={object.getFirstByKey( { item: e.urls, key: 'imgs' } )}
          StoryHeading={e.name}
        />
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <ScrollView>
        {!this.props.isFetching
          ? <View style={styles.container}>
            {this.renderStories()}
          </View>
          : <View style={{ flex: 1 }}>
            <Spinner visible={true} />
          </View>}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create( {
  container: {
    marginTop: 10,
  },
  viewStyle: {
    alignItems: 'center',
    backgroundColor: '#eeeeee',
    elevation: 2,
    height: 60,
    justifyContent: 'center',
    marginTop: 10,
    paddingTop: 15,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  textStyle: {
    fontSize: 20,
  },
} )

const mapStateToProps = state => ( {
  products: selectors.productsNameSelector( state ),
  isFetching: state.products.isFetching,
} )

export default connect( mapStateToProps, productsAction )( ProductsList )
