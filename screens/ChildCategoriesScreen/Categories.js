import React from 'react'
import PropTypes from 'prop-types'
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import Category from './Category'

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

const Categories = ( { actions, categories, navigation } ) => {
  const onPressSelectChildCategory = childCategory => {
    actions.selectChildCategory( childCategory, navigation )
  }

  const renderStories = () =>
    categories.map( e =>
      <TouchableOpacity
        key={e.name}
        onPress={() => onPressSelectChildCategory( e.name )}
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
  actions: PropTypes.shape( {
    selectChildCategory: PropTypes.func.isRequired,
  } ),
  categories: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired,
}

export default Categories
