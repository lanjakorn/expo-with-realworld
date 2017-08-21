import React, { Component } from 'react'

import { connect } from 'react-redux'
import { object } from 'utilities'
import {
  actions as servicesActions,
  selectors as servicesSelectors,
} from 'modules/Services'

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
    // opacity: 0.7,
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
    await this.props.initServicesScreen()
  }

  onPressServiceSelect = ( key, value ) => {
    this.props.setCurrentService( key )
    this.props.navigation.navigate( 'serviceDetail', {
      service: value,
    } )
  }

  render() {
    const { services, isFetching } = this.props

    return (
      <ScrollView>
        <View>
          {!isFetching
            ? Object.keys( services ).map( e =>
              <TouchableOpacity
                key={e}
                onPress={() =>
                  this.onPressServiceSelect( e, services[ e ].title )}
              >
                <Card margin={10} backgroundColor={'white'}>
                  <View style={styles.searchListItemStyle}>
                    <Image
                      key={`image-${ e }`}
                      style={styles.backgroundImage}
                      source={{
                        uri: object.getFirstByKey( {
                          item: services[ e ].urls,
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
                          {services[ e ].title}
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
  services: servicesSelectors.servicesByIdSelector( state ),
  isFetching: servicesSelectors.isFetchingSelector( state ),
} )

export default connect( mapStateToProps, servicesActions )( HouseListContainer )
