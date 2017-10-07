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
    const parsedHit = hit._highlightResult[ attributeName ]
    if (
      !core &&
      ( parsedHit.length === 0 ||
        parsedHit.every( e => e.matchedWords.length === 0 ) )
    ) {
      return <View />
    } else {
      const highligtedHit = parsedHit.map( ( part, idx ) => {
        if ( part.matchedWords.length > 0 ) {
          const __highlighted__ = part.value
            .replace( /<ais-highlight-[0-9]+>/g, '@__highlighted__' )
            .replace( /<\/ais-highlight-[0-9]+>/g, '__highlighted__@' )

          const loop = __highlighted__.split( '@' ).map( ( e, k ) => {
            if ( e.indexOf( '__highlighted__' ) !== -1 ) {
              return (
                <Text
                  key={`item-highlighted-${ e }-${ idx }-${ k }`}
                  style={{
                    color: Colors.tintColor,
                    fontWeight: '700',
                  }}
                >
                  {e.replace( /__highlighted__/g, '' )}
                </Text>
              )
            } else {
              return <Text key={`item-${ e }-${ idx }-${ k }`}>{e}</Text>
            }
          } )
          return (
            <Text
              key={`items-${ attributeName }-${ idx }`}
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
              {loop}
            </Text>
          )
        }

        return (
          <Text
            key={`lists-${ idx }-${ Math.random() }`}
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
            {part.value}
          </Text>
        )
      } )
      return <View style={{ flexDirection: 'column' }}>{highligtedHit}</View>
    }
  }
)
