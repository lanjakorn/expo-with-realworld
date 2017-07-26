import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'
import Colors from 'constants/Colors'
import { SearchBar } from 'react-native-elements'

const CustomSearchBar = ( { onFocus } ) => {
  onSearch = () => {}
  return (
    <SearchBar
      lightTheme
      textAlign="center"
      containerStyle={styles.searchBar}
      inputStyle={styles.insideSearchBar}
      onChangeText={this.onSearch}
      placeholder="Search"
      placeholderTextColor="#fff"
      onFocus={onFocus}
    />
  )
}

const styles = StyleSheet.create( {
  searchBar: {
    backgroundColor: Colors.tintColor,
    borderColor: Colors.tintColor,
  },
  insideSearchBar: {
    backgroundColor: Colors.darkTintColor,
    fontSize: 12,
  },
} )

export default CustomSearchBar
