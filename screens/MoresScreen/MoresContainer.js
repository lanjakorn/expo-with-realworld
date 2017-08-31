import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions, selectors } from 'modules/Search'
import { Colors } from 'constants'

import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { Card } from '@components'
import mores from 'mocks/mores'

const { width } = Dimensions.get( 'window' )

const styles = StyleSheet.create( {
  searchListItemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    marginBottom: 10,
    marginRight: 20,
    marginLeft: 20,
  },
  searchListItemTextStyle: {
    paddingTop: 5,
    fontSize: 16,
    marginLeft: 15,
    marginRight: 15,
    width: width * 0.7 - 25,
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
} )

class SearchListContainer extends Component {
  onPressMenuSelect = ( { navigate, title } ) => {
    this.props.navigation.navigate( navigate, { category: title } )
  }

  render() {

    return (
      <View>
        {Object.keys( mores ).map( e =>
          <TouchableOpacity
            key={e}
            onPress={() => this.onPressMenuSelect( mores[ e ] )}
          >
            <View
              style={{
                borderColor: 'white',
                borderBottomWidth: 2.5,
              }}
            >
              <Card margin={0} backgroundColor={Colors.tintColor}>
                <View style={styles.searchListItemStyle}>
                  <Text
                    style={styles.searchListItemTextStyle}
                    numberOfLines={1}
                  >
                    {mores[ e ].title}
                  </Text>
                </View>
              </Card>
            </View>
          </TouchableOpacity>
        )}
      </View>
    )
  }
}

const mapStateToProps = state => ( {
  search_history_items: selectors.getSearchHistories( state ),
} )

export default connect( mapStateToProps, actions )( SearchListContainer )
