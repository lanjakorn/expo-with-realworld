import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions as CategoriesAction, selectors } from 'modules/Categories'

import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import CategoriesDetail from './CategoriesDetail'
import { Colors } from 'constants'
import storyData from 'mocks/products.json'
import { FontAwesome } from '@expo/vector-icons'

class CategoriesList extends Component {
  constructor( props ) {
    super( props )
  }

  onPressSelectChildCategory = childCategory => {
    this.props.selectChildCategory( childCategory, this.props.navigation )
  }

  renderStories() {
    return this.props.categories.map( e =>
      <TouchableOpacity
        key={e.name}
        onPress={() => this.onPressSelectChildCategory( e.name )}
      >
        <CategoriesDetail
          key={e.name}
          StoryImage={e.image}
          StoryHeading={e.name}
        />
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          {this.renderStories()}
        </View>
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
  currentCategories: selectors.currentCategoriesSelector( state ),
  categories: selectors.childCategoriesNameSelector( state ),
  subChildcategories: selectors.subChildCategoriesNameSelector( state ),
} )

export default connect( mapStateToProps, CategoriesAction )( CategoriesList )
