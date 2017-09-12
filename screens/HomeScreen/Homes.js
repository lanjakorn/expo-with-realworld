import React from 'react'
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import PropTypes from 'prop-types'
import verticalMenu from 'mocks/verticalMenu'

import { Card } from '@components'

const { height, width } = Dimensions.get( 'window' )
const styles = StyleSheet.create( {
  backgroundImage: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    resizeMode: 'cover',
    height: height * 0.2 - 20,
    width: width * 1,
  },
  searchListItemStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
  },

  text: {
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
  },
} )

const Homes = ( { navigation } ) => {
  const onPressMenuSelect = ( { navigate, title } ) => {
    navigation.navigate( navigate, { category: title } )
  }

  const renderVerticalMenu = () =>
    Object.keys( verticalMenu ).map( e =>
      <TouchableOpacity
        key={e}
        onPress={() => onPressMenuSelect( verticalMenu[ e ] )}
      >
        <Card margin={0} backgroundColor={'white'}>
          <View style={styles.searchListItemStyle}>
            <Image
              key={`image-${ e }`}
              resizeMode="cover"
              source={require( '../../assets/images/house-menu-item.png' )}
              style={styles.backgroundImage}
            >
              <Text style={styles.text} numberOfLines={1}>
                {verticalMenu[ e ].title}
              </Text>
            </Image>
          </View>
        </Card>
      </TouchableOpacity>
    )

  return (
    <ScrollView>
      {renderVerticalMenu()}
    </ScrollView>
  )
}

Homes.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default Homes
