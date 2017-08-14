import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions as CategoriesAction, selectors } from 'modules/Categories'

import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import CategoriesDetail from './CategoriesDetail'

const styles = StyleSheet.create( {
  container: {
    marginTop: 10,
  },
} )

class CategoriesList extends Component {
  constructor( props ) {
    super( props )
  }

  onPressSelectProduct = subChildCategory => {
    this.props.setCurrentCategories( subChildCategory, 2 )
    this.props.navigation.navigate( 'products', subChildCategory )
  }

  renderStories() {
    return this.props.categories.map( e =>
      <TouchableOpacity
        key={e.name}
        onPress={() => this.onPressSelectProduct( e.name )}
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

const mapStateToProps = state => ( {
  categories: selectors.subChildCategoriesNameSelector( state ),
} )

export default connect( mapStateToProps, CategoriesAction )( CategoriesList )
