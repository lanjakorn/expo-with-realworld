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
    const [ firstProduct, ...restProduct ] = this.props.hits.filter(
      e => e.refKey === 'products'
    )

    const [ firstFaq, ...restFaq ] = this.props.hits.filter(
      e => e.refKey === 'faqs'
    )

    const [ firstCaseStudy, ...restCaseStudy ] = this.props.hits.filter(
      e => e.refKey === 'caseStudies'
    )

    const [ firstHouseCategory, ...restHouseCategory ] = this.props.hits.filter(
      e => e.refKey === 'houseCategories'
    )

    const [ firstService, ...restService ] = this.props.hits.filter(
      e => e.refKey === 'services'
    )

    const [ firstSolution, ...restSolution ] = this.props.hits.filter(
      e => e.refKey === 'solutions'
    )

    const [
      firstSolutionCategory,
      ...restSolutionCategory
    ] = this.props.hits.filter( e => e.refKey === 'solutionCategories' )

    const [ firstContact, ...restContact ] = this.props.hits.filter(
      e => e.refKey === 'contacts'
    )

    const customHit = [
      {
        ...firstSolutionCategory,
        header: true,
        headerName: 'Solution Categories',
      },
      ...restSolutionCategory,
      { ...firstSolution, header: true, headerName: 'Solutions' },
      ...restSolution,
      { ...firstService, header: true, headerName: 'Services' },
      ...restService,
      { ...firstContact, header: true, headerName: 'Contacts' },
      ...restContact,
      { ...firstFaq, header: true, headerName: 'FAQS' },
      ...restFaq,
      { ...firstCaseStudy, header: true, headerName: 'Case Studies' },
      ...restCaseStudy,
      { ...firstHouseCategory, header: true, headerName: 'House Categories' },
      ...restHouseCategory,
      { ...firstProduct, header: true, headerName: 'Products' },
      ...restProduct,
    ]
    const ds = new ListView.DataSource( {
      rowHasChanged: ( r1, r2 ) => r1 !== r2,
    } )

    const hits =
      this.props.hits.length > 0 ? (
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
