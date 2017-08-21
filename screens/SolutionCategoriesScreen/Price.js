import React from 'react'
import { Text, View } from 'react-native'

const Price = ( { startPrice, startPriceLable, endPrice, endPriceLable } ) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          flex: 5,
          flexDirection: 'column',
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 14,
              textAlign: 'right',
            }}
          >
            {startPriceLable}
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 14,
              textAlign: 'right',
              fontWeight: 'bold',
            }}
          >
            {startPrice}
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 3,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 14,
            alignContent: 'center',
          }}
        >
          {'-'}
        </Text>
      </View>
      <View
        style={{
          flex: 5,
          flexDirection: 'row',
          flexDirection: 'column',
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 14,
              textAlign: 'left',
            }}
          >
            {endPriceLable}
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 14,
              textAlign: 'left',
              fontWeight: 'bold',
            }}
          >
            {endPrice}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default Price
