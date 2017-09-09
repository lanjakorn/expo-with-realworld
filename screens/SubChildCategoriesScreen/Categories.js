import React from 'react'
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import PropTypes from 'prop-types'

import Category from './Category'

const styles = StyleSheet.create( {
  container: {
    marginTop: 10,
  },
} )

const Categories = ( { setCurrentCategories, navigation, categories } ) => {
  const onPressSelectProduct = subChildCategory => {
    setCurrentCategories( subChildCategory, 2 )
    navigation.navigate( 'products', {
      childCategory: subChildCategory,
    } )
  }

  const renderStories = () =>
    categories.map( e =>
      <TouchableOpacity
        key={e.name}
        onPress={() => onPressSelectProduct( e.name )}
      >
        <Category key={e.name} StoryImage={e.image} StoryHeading={e.name} />
      </TouchableOpacity>
    )

  return (
    <ScrollView>
      <View style={styles.container}>
        {renderStories()}
      </View>
    </ScrollView>
  )
}

Categories.propTypes = {
  categories: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
  setCurrentCategories: PropTypes.func.isRequired,
}

export default Categories
