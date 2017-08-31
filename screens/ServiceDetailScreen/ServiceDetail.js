import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  actions as servicesActions,
  selectors as servicesSelectors,
} from 'modules/Services'

import { View } from 'react-native'
import { HeaderTitle, Slider, TextDescriptionCard } from '@components'

import styles from './ServiceDetailStyle'

class ServiceDetail extends Component {
  constructor( props ) {
    super( props )
  }

  onPressContactUs = () => {
    this.props.navigation.navigate( 'contactUs' )
  }

  onPressSolutionSelect = ( key, value ) => {
    this.props.setCurrentSolutions( key )
    this.props.navigation.navigate( 'solution', { solution: value } )
  }

  render() {
    const { service: { description, title, urls } } = this.props
    return (
      <View style={styles.container}>
        <HeaderTitle
          buttonOnPress={this.onPressContactUs}
          buttontitle={'Contact Us'}
          containerstyle={styles.title}
          textTitle={title}
        />
        <View style={styles.thumbnailView}>
          {<Slider urls={urls} />}
        </View>
        <TextDescriptionCard
          containerstyle={styles.detailsView}
          textStyle={{ fontWeight: '500' }}          
          title={description}
        />
      </View>
    )
  }
}

const mapStateToProps = state => ( {
  service: servicesSelectors.servicesSelector( state ),
} )

export default connect( mapStateToProps, servicesActions )( ServiceDetail )
