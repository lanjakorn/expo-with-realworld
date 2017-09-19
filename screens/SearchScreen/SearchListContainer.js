import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TextInput,
  Image,
  StatusBar,
  Button,
  Platform,
  Keyboard,
  Dimensions,
} from 'react-native'
import { InstantSearch } from 'react-instantsearch/native'
import {
  connectSearchBox,
  connectInfiniteHits,
  connectRefinementList,
  connectStats,
  connectMenu,
  connectSortBy,
  connectRange,
  connectCurrentRefinements,
} from 'react-instantsearch/connectors'
import { Colors } from 'constants'

import { SearchHighlight, SearchSpinner } from '@components'
import { Icon, SearchBar } from 'react-native-elements'

import StarRating from 'react-native-star-rating'
import { Dropdown } from 'react-native-material-dropdown'

const { height } = Dimensions.get( 'window' )

const styles = StyleSheet.create( {
  maincontainer: {
    // flex: 1,
  },
  items: {
    ...Platform.select( {
      ios: {
        height: height - 170,
      },
      android: { height: height - 165 },
    } ),
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  options: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 5,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  sortBy: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 8,
  },
  searchBoxContainer: {
    backgroundColor: '#162331',
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBox: {
    backgroundColor: 'white',
    height: 28,
    borderWidth: 1,
    // padding: 10,
    borderRadius: 4,
    marginTop: 30,
    marginBottom: 6,
    marginLeft: 12,
    marginRight: 12,
    fontSize: 15,
    paddingLeft: 12,
    paddingRight: 12,
    borderColor: Colors.tintColor,
    // flexGrow: 1,

    // ...Platform.select( {
    //   ios: {
    //     borderRadius: 5,
    //   },
    //   android: {},
    // } ),
  },
  itemContent: {
    paddingLeft: 15,
  },
  itemName: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  itemType: {
    fontSize: 13,
    fontWeight: '200',
    paddingBottom: 5,
  },
  itemPrice: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  starRating: { alignSelf: 'flex-start' },
  filters: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchBar: {
    // marginLeft: 4,
    // marginRight: 4,
    alignItems: 'center',

    marginTop: 0,
    marginBottom: 0,
    padding: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    backgroundColor: Colors.tintColor,
    borderColor: Colors.tintColor,
  },
  insideSearchBar: {
    // margin: 10,
    padding: 0,
    margin: 0,
    height: 24,
    alignItems: 'center',
    textAlign: 'center',

    justifyContent: 'center',

    borderTopWidth: 0,
    borderBottomWidth: 0,
    backgroundColor: Colors.darkTintColor,
    borderColor: Colors.darkTintColor,
    fontSize: 15,
  },
} )
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
      <View style={styles.maincontainer}>
        <InstantSearch
          appId="UUZSU5G9ZQ"
          apiKey="a06d5a0c3748c4d5ffbec09b99668826"
          indexName="ricoh-app"
          // appId="HZNCGUAMPB"
          // apiKey="3801800605afaeac160cc7a0f5832b15"
          // indexName="getstarted_actors"
          searchState={this.state.searchState}
          onSearchStateChange={this.onSearchStateChange}
        >
          <StatusBar backgroundColor="blue" barStyle="light-content" />
          <ConnectedSearchBox navigation={this.props.navigation} />

          <View style={styles.options}>
            <ConnectedStats />
          </View>
          <ConnectedHits />
          <VirtualRefinementList attributeName="type" />
          <VirtualRange attributeName="price" />
          <VirtualMenu attributeName="category" />
          <VirtualRange attributeName="rating" />
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

  showCancelButton = () => {
    if ( this.state.searching ) {
      return (
        <Button
          buttonStyle={styles.buttonCancel}
          containerViewStyle={{
            marginLeft: 12,
            marginRight: 12,
          }}
          title="Cancel"
          fontSize={14}
          backgroundColor={Colors.tintColor}
          onPress={() => this.pressCancelButton()}
        />
      )
    }
  }

  pressCancelButton = () => {
    Keyboard.dismiss()
    console.log( this.props )
    this.props.navigation.goBack( null )
    //this.props.changeSearchText( '' )
    this.setState( { searching: false } )
    this.setState( { isTouchableDisabled: false } )
  }

  onSearchActive = () => {
    console.log( 'qqq' )
    this.setState( { searching: true } )
    this.setState( { isTouchableDisabled: true } )
  }

  componentDidMount() {
    console.log( this.refs )
    this.refs.search_textinput_component.props.onFocus()
  }

  render() {
    return (
      <View>
        <SearchSpinner left={60} />
        <SearchBar
          lightTheme
          ref="search_textinput_component"
          style={styles.searchBox}
          onChangeText={text => this.props.refine( text )}
          value={this.props.currentRefinement}
          placeholder={'Search'}
          clearButtonMode={'always'}
          spellCheck={false}
          autoCorrect={false}
          autoCapitalize={'none'}
          keyboardType={'web-search'}
          textAlign="center"
          containerStyle={styles.searchBar}
          inputStyle={styles.insideSearchBar}
          icon={{ style: { marginTop: 20 } }}
          onFocus={this.onSearchActive}
          underlineColorAndroid={Colors.darkTintColor}
        />
        {this.showCancelButton()}
      </View>
    )
  }
}

SearchBox.propTypes = {
  refine: PropTypes.func.isRequired,
  currentRefinement: PropTypes.string,
}

const ConnectedSearchBox = connectSearchBox( SearchBox )

class Hits extends Component {
  onEndReached() {
    if ( this.props.hasMore ) {
      this.props.refine()
    }
  }

  render() {
    const ds = new ListView.DataSource( {
      rowHasChanged: ( r1, r2 ) => r1 !== r2,
    } )
    const hits =
      this.props.hits.length > 0
        ? <View style={styles.items}>
          <ListView
            dataSource={ds.cloneWithRows( this.props.hits )}
            renderRow={this._renderRow}
            renderSeparator={this._renderSeparator}
            onEndReached={this.onEndReached.bind( this )}
          />
        </View>
        : null
    return hits
  }

  _renderRow = ( hit, sectionId, rowId ) =>
    <View style={styles.item} key={rowId}>
      <View style={styles.itemContent}>
        <Text style={styles.itemName}>
          <SearchHighlight
            attributeName="name"
            hit={hit}
            highlightProperty="_highlightResult"
          />
        </Text>
        <Text style={styles.itemType}>
          <SearchHighlight
            attributeName="type"
            hit={hit}
            highlightProperty="_highlightResult"
          />
        </Text>
        <Text style={styles.itemPrice}>
          {hit.title}
        </Text>
      </View>
    </View>

  _renderSeparator = ( sectionID, rowID, adjacentRowHighlighted ) =>
    <View
      key={`${ sectionID }-${ rowID }`}
      style={{
        height: adjacentRowHighlighted ? 4 : 1,
        backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#CCCCCC',
      }}
    />
}

Hits.propTypes = {
  hits: PropTypes.array.isRequired,
  refine: PropTypes.func.isRequired,
  hasMore: PropTypes.bool.isRequired,
}

const ConnectedHits = connectInfiniteHits( Hits )
const ConnectedStats = connectStats( ( { nbHits } ) =>
  <Text style={{ paddingLeft: 8 }}>
    {nbHits} found
  </Text>
)

const ConnectedSortBy = connectSortBy( ( { refine, items, currentRefinement } ) =>
  <View style={styles.sortBy}>
    <Dropdown
      data={items}
      onChangeText={value => refine( value )}
      containerStyle={{
        width: 110,
        height: 30,
        bottom: 30,
      }}
      label=""
      value={items.find( item => item.value === currentRefinement ).label}
    />
  </View>
)

const Filters = connectCurrentRefinements(
  ( { items, searchState, onSearchStateChange } ) =>
    <Button title={`Filters (${ items.length })`} color="#162331" />
)
const VirtualRange = connectRange( () => null )
const VirtualRefinementList = connectRefinementList( () => null )
const VirtualMenu = connectMenu( () => null )
