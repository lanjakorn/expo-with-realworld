import React from 'react'
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import PropTypes from 'prop-types'
import mores from 'mocks/mores'
import { Colors } from 'constants'

import { Card } from '@components'

const { width } = Dimensions.get( 'window' )
const styles = StyleSheet.create( {
  searchListItemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },
  searchListItemTextStyle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 15,
    marginRight: 15,
    paddingTop: 5,
    textAlign: 'center',
    width: width * 0.7 - 25,
  },
  searchSection: {
    borderBottomWidth: 2.5,
    borderColor: 'white',
  },
} )

const Mores = ( { onPressMenuSelect } ) =>
  <View>
    {Object.keys( mores ).map( e =>
      <TouchableOpacity key={e} onPress={() => onPressMenuSelect( mores[ e ] )}>
        <View style={styles.searchSection}>
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

Mores.propTypes = {
  onPressMenuSelect: PropTypes.func.isRequired,
}

export default Mores
