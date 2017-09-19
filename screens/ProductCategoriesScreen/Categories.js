import React from 'react'
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import PropTypes from 'prop-types'

import Category from './Category'

const styles = StyleSheet.create( {
  container: {
    marginTop: 10,
  },
} )

const CategoriesList = ( { categories, onPressSelectChildCategory } ) => {
  const renderCategories = () =>
    categories.map( e =>
      <TouchableOpacity
        key={e.name}
        onPress={() => onPressSelectChildCategory( e.name )}
      >
        <Category
          key={e.name}
          categoryImage={e.image}
          categoryHeading={e.name}
        />
      </TouchableOpacity>
    )

  return (
    <ScrollView>
      <View style={styles.container}>
        {renderCategories()}
      </View>
    </ScrollView>
  )
}

CategoriesList.propTypes = {
  categories: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  navigation: PropTypes.object.isRequired,
  onPressSelectChildCategory: PropTypes.func.isRequired,
}

export default CategoriesList
