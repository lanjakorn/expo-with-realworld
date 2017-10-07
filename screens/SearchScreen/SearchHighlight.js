import React from 'react'
import { Dimensions, Text, View } from 'react-native'
import { connectHighlight } from 'react-instantsearch/connectors'
import { Colors } from 'constants'

export default connectHighlight(
  ( {
    highlight,
    attributeName,
    hit,
    highlightProperty,
    core = false,
    textStyle,
  } ) => {
    const parsedHit = highlight( { attributeName, hit, highlightProperty } )
    if (
      !core &&
      ( parsedHit.length === 0 ||
        parsedHit.every( e => e.isHighlighted === false ) )
    ) {
      return <View />
    } else {
      const highligtedHit = parsedHit.map( ( part, idx ) => {
        if ( part.isHighlighted )
          return (
            <Text
              key={idx}
              style={{
                color: Colors.tintColor,
                fontWeight: '700',
                lineHeight: 22,
              }}
            >
              {part.value}
            </Text>
          )
        return part.value
      } )
      return (
        <Text>
          <Text
            style={[
              {
                fontSize: core ? 14.5 : 12.5,
                fontWeight: core ? '300' : '200',
                lineHeight: 22,
                textAlign: 'justify',
                width: Dimensions.get( 'window' ).width * 0.9 + 8,
              },
              textStyle,
            ]}
          >
            {highligtedHit}
          </Text>
        </Text>
      )
    }
  }
)
