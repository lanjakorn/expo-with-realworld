import React from 'react'
import { string } from 'utilities'

import { Text, StyleSheet, View } from 'react-native'

const styles = StyleSheet.create( {
  containerStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  sectionLeft: {
    flex: 5,
    flexDirection: 'column',
  },
  sectionCenter: {
    alignItems: 'center',
    flex: 3,
    justifyContent: 'center',
  },
  sectionRight: {
    flex: 5,
    flexDirection: 'column',
  },
} )

const Price = ( { minPrice, minPriceLable, maxPrice, maxPriceLable } ) => {
  const { containerStyle, sectionLeft, sectionCenter, sectionRight } = styles
  return (
    <View style={containerStyle}>
      <View style={sectionLeft}>
        <View>
          <Text
            style={{
              fontSize: 14,
              paddingBottom: 10,
              textAlign: 'right',
            }}
          >
            {minPriceLable}
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              textAlign: 'right',
            }}
          >
            {string.formatMoney( {
              digit: 0,
              num: minPrice,
              showDigit: false,
              symbol: '฿',
              symbolBack: true,
            } )}
          </Text>
        </View>
      </View>
      <View style={sectionCenter}>
        <Text
          style={{
            alignContent: 'center',
            fontSize: 14,
          }}
        >
          {'-'}
        </Text>
      </View>
      <View style={sectionRight}>
        <View>
          <Text
            style={{
              fontSize: 14,
              paddingBottom: 10,
              textAlign: 'left',
            }}
          >
            {maxPriceLable}
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              textAlign: 'left',
            }}
          >
            {string.formatMoney( {
              digit: 0,
              num: maxPrice,
              showDigit: false,
              symbol: '฿',
              symbolBack: true,
            } )}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default Price
