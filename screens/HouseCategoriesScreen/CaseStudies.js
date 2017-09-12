import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { object } from 'utilities'

import { CardContentImage } from '@components'

const CaseStudies = ( { caseStudies } ) =>
  <View>
    {Object.keys( caseStudies ).map( e =>
      <View
        key={`container-case-${ e }`}
        style={{
          borderBottomWidth: 1,
          borderColor: '#ddd',
        }}
      >
        <CardContentImage
          description={caseStudies[ e ].description}
          key={e}
          title={caseStudies[ e ].title}
          url={object.getFirstByKey( {
            item: caseStudies[ e ].urls,
            key: 'imgs',
          } )}
        />
      </View>
    )}
  </View>

CaseStudies.propTypes = {
  caseStudies: PropTypes.object.isRequired,
}

export default CaseStudies
