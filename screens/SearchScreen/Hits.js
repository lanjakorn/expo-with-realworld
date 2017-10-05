import React, { Component } from 'react'
import { View, ListView } from 'react-native'
import PropTypes from 'prop-types'
import { array } from 'utilities'

import renderRow from './Hit'
import renderSeparator from './Separator '
import styles from './SearchStyle'

class Hits extends Component {
  render() {
    const customHit = array.trackFirstElementByKey( this.props.hits, 'refKey' )
    const sort = array.sortByKey( customHit, 'refKey' )

    console.log( customHit )

    const ds = new ListView.DataSource( {
      rowHasChanged: ( r1, r2 ) => r1 !== r2,
    } )

    const hits =
      sort.length > 0 ? (
        <View style={styles.items}>
          <ListView
            dataSource={ds.cloneWithRows( sort )}
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
