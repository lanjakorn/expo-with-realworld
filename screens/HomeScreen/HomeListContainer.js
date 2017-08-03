import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Colors } from 'constants'
import verticalMenu from 'mocks/verticalMenu.json'

import {
  Text,
  View,
  AsyncStorage,
  Dimensions,
  Image,
  ScrollView,
  Linking,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { Button, Icon, Tile } from 'react-native-elements'
import { Card, CardSection } from '@components'

var { height, width } = Dimensions.get( 'window' )

class SearchListContainer extends Component {
  constructor( props ) {
    super( props )
  }

  // async componentWillMount() {
  //   await this.props.getSearchHistory()
  // }

  // onPressSearchHistoryItem = query => {
  //   this.props.navigation.navigate( 'search' )
  //   this.props.searching( true )
  //   this.props.changeSearchText( query )
  // }

  render() {
    return (
      <ScrollView>
        {verticalMenu.map( e =>
          <TouchableOpacity
            key={e}
            //onPress={() => this.onPressSearchHistoryItem( query )}
          >
            <Card margin={0} backgroundColor={'white'}>
              <View style={styles.searchListItemStyle}>
                <Image
                  key={`image-${ e }`}
                  style={styles.backgroundImage}
                  resizeMode="cover"
                  source={require( '../../assets/images/vertical-menu-item.png' )}
                >
                  <Text style={styles.text} numberOfLines={1}>
                    {e}
                  </Text>
                </Image>
              </View>
            </Card>
          </TouchableOpacity>
        )}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create( {
  searchListItemStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    marginTop: 0,
    marginBottom: 0,
    marginRight: 0,
    marginLeft: 0,
  },
  backgroundImage: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'cover',
    height: height * 0.2 - 22,
  },
  text: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)',
    fontSize: 22,
  },
} )

const mapStateToProps = state => ( {
  //search_history_items: getSearch( state ),
} )

export default connect( mapStateToProps )( SearchListContainer )
