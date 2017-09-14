import React from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'

const styles = {
  textDescription: {
    fontSize: 12.5,
    fontWeight: '600',
    lineHeight: 24,
    textAlign: 'justify',
  },
}

export const TextDescriptionCard = ( {
  containerstyle,
  textStyle = {},
  title,
} ) => {
  return (
    <View style={containerstyle}>
      <Text style={{ ...styles.textDescription, ...textStyle }}>
        {title}
      </Text>
    </View>
  )
}

TextDescriptionCard.defaultProps = {
  textStyle: {},
}

TextDescriptionCard.propTypes = {
  containerstyle: PropTypes.number,
  textStyle: PropTypes.object,
  title: PropTypes.string.isRequired,
}

export default TextDescriptionCard
