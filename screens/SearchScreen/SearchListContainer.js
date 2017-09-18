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
import { SearchHighlight, SearchSpinner } from '@components'

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
    height: 40,
    borderWidth: 1,
    padding: 10,
    margin: 10,
    flexGrow: 1,
    ...Platform.select( {
      ios: {
        borderRadius: 5,
      },
      android: {},
    } ),
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
          <ConnectedSearchBox />

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
  render() {
    return (
      <View style={styles.searchBoxContainer}>
        <SearchSpinner left={60} />
        <TextInput
          style={styles.searchBox}
          onChangeText={text => this.props.refine( text )}
          value={this.props.currentRefinement}
          placeholder={'Search a product...'}
          clearButtonMode={'always'}
          underlineColorAndroid={'white'}
          spellCheck={false}
          autoCorrect={false}
          autoCapitalize={'none'}
        />
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
    console.log( this.props.hits )
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
      <Image style={{ height: 100, width: 100 }} source={{ uri: hit.image }} />
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
          ${hit.price}
        </Text>
        <View style={styles.starRating}>
          <StarRating
            disabled={true}
            maxStars={5}
            rating={hit.rating}
            starSize={15}
            starColor="#FBAE00"
          />
        </View>
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
    {nbHits} products found
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
