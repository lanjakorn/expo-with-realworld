import React, { Component } from 'react'
import { View, ListView } from 'react-native'
import PropTypes from 'prop-types'
import { array } from 'utilities'

import renderRow from './Hit'
import renderSeparator from './Separator '
import styles from './SearchStyle'

class Hits extends Component {
  render() {
    const track = array.trackFirstElementByKey( this.props.hits, 'refKey' )
    const sort = array.sortByKey( track, 'refKey' )
    const count = array.countByKey( sort, 'refKey' )
    const computedHit = Object.keys( count ).reduce( ( p, c ) => {
      return [ ...p, ...count[ c ].map( e => ( { ...e, count: count[ c ].length } ) ) ]
    }, [] )

    const ds = new ListView.DataSource( {
      rowHasChanged: ( r1, r2 ) => r1 !== r2,
    } )

    const hits =
      sort.length > 0 ? (
        <View style={styles.items}>
          <ListView
            dataSource={ds.cloneWithRows( computedHit )}
            renderRow={renderRow}
            renderSeparator={renderSeparator}
          />
        </View>
      ) : null
    return hits
  }
}

Hits.propTypes = {
  hits: PropTypes.array.isRequired,
}

export default Hits
