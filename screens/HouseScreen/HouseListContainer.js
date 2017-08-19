import React, { Component } from 'react'

import { connect } from 'react-redux'
import { object } from 'utilities'
import {
  actions as houseCategoriesActions,
  selectors as houseCategoriesSelectors,
} from 'modules/HouseCategories'
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'
import { Card } from '@components'

const { height, width } = Dimensions.get( 'window' )

const styles = StyleSheet.create( {
  searchListItemStyle: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
  },
  backgroundImage: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    resizeMode: 'cover',
    height: height * 0.2 - 20,
    width: width * 1 - 15,
  },
  text: {
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textDescription: {
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'black',
    fontSize: 14,
    marginBottom: 5,
    marginLeft: 12,
    marginRight: 12,
    marginTop: 5,
    textAlign: 'center',
  },
} )

class HouseListContainer extends Component {
  constructor( props ) {
    super( props )
  }

  async componentWillMount() {
    await this.props.initHouseCategoriesScreen()
  }

  onPressHouseCategoriesSelect = ( key, value ) => {
    this.props.setCurrentHouseCategory( key )
    this.props.navigation.navigate( 'houseCategories', {
      category: value,
    } )
  }

  render() {
    const { houseCategories, isFetchingHouseCategories } = this.props

    return (
      <ScrollView>
        <View>
          {!isFetchingHouseCategories
            ? Object.keys( houseCategories ).map( e =>
              <TouchableOpacity
                key={houseCategories[ e ].title}
                onPress={() =>
                  this.onPressHouseCategoriesSelect(
                    e,
                    houseCategories[ e ].title
                  )}
              >
                <Card margin={10} backgroundColor={'white'}>
                  <View style={styles.searchListItemStyle}>
                    <Image
                      key={`image-${ houseCategories[ e ].title }`}
                      style={styles.backgroundImage}
                      source={{
                        uri: object.getFirstByKey( {
                          item: houseCategories[ e ].urls,
                          key: 'imgs',
                        } ),
                      }}
                    >
                      <View
                        stlye={{
                          flex: 1,
                          flexDirection: 'row',
                          flexWrap: 'wrap',
                        }}
                      >
                        <Text style={styles.text} numberOfLines={1}>
                          {houseCategories[ e ].title}
                        </Text>
                      </View>
                      <View
                        stlye={{
                          flexDirection: 'row',
                          flexWrap: 'wrap',
                          flex: 1,
                        }}
                      >
                        <Text style={styles.textDescription}>
                          {houseCategories[ e ].description}
                        </Text>
                      </View>
                    </Image>
                  </View>
                </Card>
              </TouchableOpacity>
            )
            : <View style={{ flex: 1 }}>
              <Spinner visible={true} />
            </View>}
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = state => ( {
  houseCategories: houseCategoriesSelectors.houseCategoriesByIdSelector( state ),
  isFetchingHouseCategories: houseCategoriesSelectors.isFetchingSelector( state ),
} )

export default connect( mapStateToProps, houseCategoriesActions )(
  HouseListContainer
)
