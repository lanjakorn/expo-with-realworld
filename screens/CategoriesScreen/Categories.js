import React from 'react'
import PropTypes from 'prop-types'

import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'

import Category from './Category'

const styles = StyleSheet.create( {
  container: {
    marginTop: 10,
  },
} )

const CategoriesList = ( { actions, categories, isFetching, navigation } ) => {
  const onPressSelectChildCategory = childCategory => {
    actions.setCurrentCategories( childCategory, 0 )
    navigation.navigate( 'childCategories', {
      category: childCategory,
    } )
  }

  const renderCategories = () => {
    return categories.map( e =>
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
  }

  return (
    <ScrollView>
      {!isFetching
        ? <View style={styles.container}>
          {renderCategories()}
        </View>
        : <View style={{ flex: 1 }}>
          <Spinner visible={true} />
        </View>}
    </ScrollView>
  )
}

CategoriesList.propTypes = {
  actions: PropTypes.shape( {
    setCurrentCategories: PropTypes.func.isRequired,
  } ),
  categories: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  navigation: PropTypes.object.isRequired,
}

export default CategoriesList
