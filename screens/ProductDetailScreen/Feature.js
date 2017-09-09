import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import PropTypes from 'prop-types'

import styles from './FeatureStyle'

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

Feature.propTypes = {
  description: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onPressFeature: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
}

export default Feature
