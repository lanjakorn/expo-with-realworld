import React, { Component } from 'react'
import { View, ListView } from 'react-native'
import PropTypes from 'prop-types'

import renderRow from './Hit'
import renderSeparator from './Separator '
import styles from './SearchStyle'

class Hits extends Component {
  onEndReached() {
    if ( this.props.hasMore ) {
      this.props.refine()
    }
  }

  render() {
    const customHit = this.props.hits.reduce(
      ( p, c ) => {
        return {
          group: p.group.every( e => e !== c.refKey )
            ? [ ...p.group, c.refKey ]
            : p.group,
          newData: p.group.every( e => e !== c.refKey )
            ? [ ...p.newData, { ...c, isFirst: true } ]
            : [ ...p.newData, c ],
        }
      },
      { group: [], newData: [] }
    ).newData

    const ds = new ListView.DataSource( {
      rowHasChanged: ( r1, r2 ) => r1 !== r2,
    } )
    const hits =
      customHit.length > 0 ? (
        <View style={styles.items}>
          <ListView
            dataSource={ds.cloneWithRows( customHit )}
            renderRow={renderRow}
            renderSeparator={renderSeparator}
            onEndReached={this.onEndReached.bind( this )}
          />
        </View>
      ) : null
    return hits
  }
}

Hits.propTypes = {
  hits: PropTypes.array.isRequired,
  refine: PropTypes.func.isRequired,
  hasMore: PropTypes.bool.isRequired,
}

export default Hits
