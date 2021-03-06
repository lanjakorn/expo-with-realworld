import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Colors, DefaultTab } from 'constants'
import { actions as settingsActions, selectors } from 'modules/Settings'
import { actions as searchActions } from 'modules/Search'

import { Icon } from 'react-native-elements'
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { Card, Search } from '@components'

const { height } = Dimensions.get( 'window' )

const styles = StyleSheet.create( {
  searchListItemStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
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
    width: Dimensions.get( 'window' ).width * 0.7 - 25,
  },
} )

class DefaultTabSetting extends Component {
  static navigationOptions = ( { navigation } ) => {
    return {
      header: (
        <View style={{ backgroundColor: Colors.tintColor }}>
          <View style={{ marginTop: 24, height: 40, flexDirection: 'row' }}>
            <FontAwesome
              name={'cog'}
              size={24}
              style={{ paddingTop: 5, paddingLeft: 3 }}
              color={'white'}
              onPress={() => {
                navigation.goBack( null )
              }}
            />
            <Search navigation={navigation} />
          </View>
        </View>
      ),
    }
  }

  constructor( props ) {
    super( props )
  }

  async componentWillMount() {
    await this.props.getSearchHistory()
    await this.props.getDefaultTab()
  }

  onPressSearchHistoryItem = query => {
    //this.props.navigation.navigate( 'search' )
    this.props.changeSearchText( query )
    this.props.searching( true )
  }

  showDefaultCheckedIcon = idx => {
    if ( idx === this.props.default_tab ) {
      return (
        <Icon
          name="done"
          color={Colors.tintColor}
          containerStyle={{ marginLeft: 20 }}
        />
      )
    }
  }

  selectDefaultTab = idx => {
    this.props.changeDefaultTab( idx )
    this.props.navigation.goBack( null )
  }

  render() {
    return (
      <ScrollView style={{ marginTop: 20, height: height }}>
        {DefaultTab.map( ( tabRouteName, idx ) =>
          <TouchableOpacity
            key={idx}
            onPress={() => this.selectDefaultTab( tabRouteName )}
          >
            <Card margin={0} backgroundColor={'white'}>
              <View style={styles.searchListItemStyle}>
                <Text style={styles.searchListItemTextStyle} numberOfLines={1}>
                  {tabRouteName}
                </Text>
                {this.showDefaultCheckedIcon( tabRouteName )}
              </View>
            </Card>
          </TouchableOpacity>
        )}
      </ScrollView>
    )
  }
}

const mapStateToProps = state => ( {
  default_tab: selectors.getDefaultTabSelector( state ),
} )

const combineAction = () => ( {
  ...settingsActions,
  ...searchActions,
} )

export default connect( mapStateToProps, combineAction() )( DefaultTabSetting )
