import React from 'react'
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import PropTypes from 'prop-types'
import { ga } from 'services'

import Category from './Category'

const styles = StyleSheet.create( {
  container: {
    marginTop: 10,
  },
  textStyle: {
    fontSize: 20,
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
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.2,
  },
} )

const Categories = ( { actions, categories, navigation } ) => {
  const onPressSelectChildCategory = childCategory => {
    ga.trackEvent( {
      eventCategory: 'products',
      eventAction: 'select child category of products',
      eventLabel: childCategory,
    } )
    actions.selectChildCategory( childCategory, navigation )
  }

  const renderStories = () =>
    categories.map( e =>
      <TouchableOpacity
        key={e.name}
        onPress={() => onPressSelectChildCategory( e.name )}
      >
        <Category key={e.name} StoryHeading={e.name} StoryImage={e.image} />
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
