import React from 'react'
import { Dimensions, View, Text, TouchableOpacity } from 'react-native'
import { Colors } from 'constants'

const { width } = Dimensions.get( 'window' )

const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: 'column',
  },
  sectionTitle: {
    flex: 1,
    flexDirection: 'row',
  },
  rowSymbol: {
    flexDirection: 'row',
    marginRight: 12,
  },
  rowTitle: {
    flexDirection: 'row',
    width: width * 0.8 + 20,
  },
  textTitle: {
    fontSize: 15,
    lineHeight: 24,
  },
  symbol: {
    fontSize: 16,
  },
  rowPrefix: {
    flexDirection: 'row',
    marginRight: 20,
  },
  rowDescription: {
    flex: 5,
    justifyContent: 'flex-start',
  },
  sectionDescription: {
    flex: 1,
    flexDirection: 'row',
  },
  textDescription: {
    fontSize: 15,
    lineHeight: 24,
    color: Colors.textDescription,
  },
  rowMores: {
    flex: 1,
    justifyContent: 'flex-end',
    marginRight: 10,
  },
  textMores: {
    fontSize: 15,
    lineHeight: 24,
    color: '#0066c0',
  },
}

const Feature = ( { description, index, onPressFeature, title } ) =>
  <View style={styles.containerStyle}>
    <View style={styles.sectionTitle}>
      <View style={styles.rowSymbol}>
        <Text style={styles.symbol}>
          {'•'}
        </Text>
      </View>
      <View style={styles.rowTitle}>
        <Text style={styles.textTitle}>
          {title}
        </Text>
      </View>
    </View>
    <View style={styles.sectionDescription}>
      <View style={styles.rowPrefix} />
      <View style={styles.rowDescription}>
        <Text multiline={true} numberOfLines={2} style={styles.textDescription}>
          {description}
        </Text>
      </View>
      <View style={styles.rowMores}>
        <TouchableOpacity onPress={() => onPressFeature( index )}>
          <Text style={styles.textMores}>
            {'more'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>

export default Feature
