import React from 'react'
import { View } from 'react-native'

const Separator = ( sectionID, rowID, adjacentRowHighlighted ) => (
  <View
    key={`${ sectionID }-${ rowID }`}
    style={{
      height: adjacentRowHighlighted ? 4 : 1,
      backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#CCCCCC',
    }}
  />
)

export default Separator
