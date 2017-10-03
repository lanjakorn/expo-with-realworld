import React from 'react'
import { Dimensions, Text, View } from 'react-native'
import { connectHighlight } from 'react-instantsearch/connectors'

export default connectHighlight(
  ( { highlight, attributeName, hit, highlightProperty, core = false } ) => {
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
            <Text key={idx} style={{ backgroundColor: '#ffff99' }}>
              {part.value}
            </Text>
          )
        return part.value
      } )
      return (
        <Text
          style={{
            fontSize: 13,
            fontWeight: core ? '500' : '200',
            lineHeight: 22,
            textAlign: 'justify',
            width: Dimensions.get( 'window' ).width * 0.9 + 8,
          }}
        >
          <Text>{highligtedHit}</Text>
        </Text>
      )
    }
  }
)
