import React from 'react'
import PropTypes from 'prop-types'
import mores from 'mocks/mores'
import { Colors } from 'constants'

import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { Card } from '@components'

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

const Mores = ( { navigation } ) => {
  const onPressMenuSelect = ( { navigate, title } ) => {
    navigation.navigate( navigate, { category: title } )
  }

  return (
    <View>
      {Object.keys( mores ).map( e =>
        <TouchableOpacity key={e} onPress={() => onPressMenuSelect( mores[ e ] )}>
          <View
            style={{
              borderColor: 'white',
              borderBottomWidth: 2.5,
            }}
          >
            <Card margin={0} backgroundColor={Colors.tintColor}>
              <View style={styles.searchListItemStyle}>
                <Text style={styles.searchListItemTextStyle} numberOfLines={1}>
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

Mores.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default Mores
