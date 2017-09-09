import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'
import { string } from 'utilities'

import styles from './PriceStyle'

const Price = ( { minPrice, minPriceLable, maxPrice, maxPriceLable } ) => {
  return (
    <View style={styles.containerStyle}>
      <View style={styles.sectionLeft}>
        <View>
          <Text style={styles.textMinPriceLable}>
            {minPriceLable}
          </Text>
        </View>
        <View>
          <Text style={styles.textMinPrice}>
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
      <View style={styles.sectionCenter}>
        <Text style={styles.textSymbol}>
          {'-'}
        </Text>
      </View>
      <View style={styles.sectionRight}>
        <View>
          <Text style={styles.textMaxPriceLable}>
            {maxPriceLable}
          </Text>
        </View>
        <View>
          <Text style={styles.textMaxPrice}>
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

Price.propTypes = {
  minPrice: PropTypes.number.isRequired,
  minPriceLable: PropTypes.string.isRequired,
  maxPrice: PropTypes.number.isRequired,
  maxPriceLable: PropTypes.string.isRequired,
}

export default Price
