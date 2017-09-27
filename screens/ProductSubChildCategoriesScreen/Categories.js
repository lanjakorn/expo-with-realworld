import React from 'react'
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import PropTypes from 'prop-types'

import Category from './Category'

const styles = StyleSheet.create( {
  container: {
    marginTop: 0,
  },
} )

const Categories = ( { categories, onPressSelectProduct } ) => {
  const renderStories = () =>
    categories.map( ( { image, name } ) =>
      <TouchableOpacity key={name} onPress={() => onPressSelectProduct( name )}>
        <Category key={name} StoryImage={image} StoryHeading={name} />
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
  categories: PropTypes.array.isRequired,
  onPressSelectProduct: PropTypes.func.isRequired,
}

export default Categories
