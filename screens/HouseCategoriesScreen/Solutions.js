import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import PropTypes from 'prop-types'

import { CardContent } from '@components'

const Solutions = ( { onPressSolutionSelect, solutions } ) =>
  <View>
    {Object.keys( solutions ).map( e =>
      <View
        key={`container-solution-${ e }`}
        style={{
          borderBottomWidth: 1,
          borderColor: '#ddd',
        }}
      >
        <TouchableOpacity
          key={`touch-${ e }`}
          onPress={() => onPressSolutionSelect( e, solutions[ e ].title )}
        >
          <CardContent
            description={solutions[ e ].description}
            key={e}
            title={solutions[ e ].title}
          />
        </TouchableOpacity>
      </View>
    )}
  </View>

Solutions.propTypes = {
  onPressSolutionSelect: PropTypes.func.isRequired,
  solutions: PropTypes.object.isRequired,
}

export default Solutions
