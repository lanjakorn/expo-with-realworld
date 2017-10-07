import React, { Component } from 'react'
import { Text, View, StatusBar, Keyboard } from 'react-native'
import { Button, SearchBar } from 'react-native-elements'
import { InstantSearch } from 'react-instantsearch/native'
import {
  connectSearchBox,
  connectInfiniteHits,
  connectHits,
  connectRefinementList,
  connectStats,
  connectMenu,
  connectRange,
} from 'react-instantsearch/connectors'
import { LinearGradient } from 'expo'
import PropTypes from 'prop-types'

import { Colors } from 'constants'

import { SearchSpinner } from '@components'
import Hits from './Hits'
import styles from './SearchStyle'

class Home extends Component {
  static displayName = 'React Native example'
  constructor( props ) {
    super( props )
    this.onSearchStateChange = this.onSearchStateChange.bind( this )
    this.state = {
      searchState: this.props.searchState ? this.props.searchState : {},
    }
  }

  componentWillReceiveProps() {}

  onSearchStateChange( nextState ) {
    this.setState( { searchState: { ...this.state.searchState, ...nextState } } )
  }

  render() {
    return (
      <View>
        <InstantSearch
          appId="UUZSU5G9ZQ"
          apiKey="a06d5a0c3748c4d5ffbec09b99668826"
          indexName="monkungreal"
          searchState={this.state.searchState}
          onSearchStateChange={this.onSearchStateChange}
        >
          <StatusBar backgroundColor="blue" barStyle="light-content" />
          <ConnectedSearchBox navigation={this.props.navigation} />
          <ConnectedStats />
          <ConnectedHits />
        </InstantSearch>
      </View>
    )
  }
}

Home.propTypes = {
  searchState: PropTypes.object,
}

export default Home

class SearchBox extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      isTouchableDisabled: false,
      searching: false,
    }
  }

  pressCancelButton = () => {
    Keyboard.dismiss()
    this.props.navigation.goBack( null )
    this.setState( { isTouchableDisabled: false, searching: false } )
  }

  onSearchActive = () => {
    this.setState( { isTouchableDisabled: true, searching: true } )
  }

  render() {
    return (
      <LinearGradient
        colors={[ '#CE1D45', '#E0244F', '#E33B61' ]}
        start={{ x: 0.0, y: 0.25 }}
        end={{ x: 1.0, y: 1.0 }}
        style={styles.container}
      >
        <SearchBar
          lightTheme
          autoFocus={true}
          style={[ styles.searchBox, styles.altTouchableView ]}
          onChangeText={text => this.props.refine( text )}
          value={this.props.currentRefinement}
          placeholder={'Search'}
          clearButtonMode={'always'}
          spellCheck={false}
          autoCorrect={false}
          autoCapitalize={'none'}
          keyboardType={'web-search'}
          containerStyle={[ styles.searchBar, styles.altTouchableView ]}
          icon={{ style: styles.icon }}
          onFocus={this.onSearchActive}
          // underlineColorAndroid={Colors.darkTintColor}
        />
        <Button
          buttonStyle={{
            paddingLeft: 10,
            paddingRight: 10,
            margin: 0,
          }}
          style={{
            padding: 0,
            margin: 0,
          }}
          containerViewStyle={styles.buttonContainerCancel}
          title="Cancel"
          fontSize={14}
          backgroundColor="transparent"
          underlayColor="transparent"
          onPress={() => this.pressCancelButton()}
        />
      </LinearGradient>
    )
  }
}

SearchBox.propTypes = {
  refine: PropTypes.func.isRequired,
  currentRefinement: PropTypes.string,
}

const ConnectedSearchBox = connectSearchBox( SearchBox )
const ConnectedHits = connectHits( Hits )
const ConnectedStats = connectSearchBox(
  ( { currentRefinement } ) =>
    currentRefinement ? (
      <View style={styles.options}>
        <Text style={{ paddingLeft: 10, letterSpacing: 1 }}>
          <Text>{'Search for "'}</Text>
          <Text style={{ color: Colors.tintColor, fontWeight: '700' }}>
            {currentRefinement}
          </Text>
          <Text>{'"'}</Text>
        </Text>
      </View>
    ) : (
      <Text style={{ backgroundColor: 'white' }} />
    )
)
