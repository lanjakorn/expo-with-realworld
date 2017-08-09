import React, { Component } from 'react'
import { connect } from 'react-redux'
import verticalMenu from 'mocks/verticalMenu.json'

import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { Card } from '@components'
import Spinner from 'react-native-loading-spinner-overlay'

var { height, width } = Dimensions.get( 'window' )

class SearchListContainer extends Component {
  constructor( props ) {
    super( props )
  }

  // async componentWillMount() {
  //   await this.props.getSearchHistory()
  // }

  onPressMenuSelect = link => {
    return link === 'Products' && this.props.navigation.navigate( 'products' )
  }

  render() {
    return (
      <ScrollView>
        {!this.props.isFetching
          ? verticalMenu.map( e =>
            <TouchableOpacity
              key={e}
              onPress={() => this.onPressMenuSelect( e )}
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
          )
          : <View style={{ flex: 1 }}>
            <Spinner visible={true} />
          </View>}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create( {
  searchListItemStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
  },
  backgroundImage: {
    alignItems: 'center',
    flexDirection: 'row',
    height: height * 0.2 - 22,
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  text: {
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
  },
} )

const mapStateToProps = state => ( {
  isFetching: state.categories.isFetching,
} )

export default connect( mapStateToProps )( SearchListContainer )
