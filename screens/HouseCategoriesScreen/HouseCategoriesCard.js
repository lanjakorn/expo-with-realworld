import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  actions as houseCategoriesActions,
  selectors as categoriesSelectors,
} from 'modules/HouseCategories'
import { selectors as settingsSelectors } from 'modules/Settings'
import PropTypes from 'prop-types'

import { object } from 'utilities'
import { View } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'
import {
  CardContent,
  CardContentImage,
  HeaderTitle,
  HeaderSection,
  TextDescriptionCard,
} from '@components'

import Slider from './Slider'
import styles from './HouseCategoriesCardStyle'

class HouseCategoriesCard extends Component {
  constructor( props ) {
    super( props )
  }

  async componentWillMount() {
    await this.props.initHouseCategoriesScreen()
  }

  onPressContactUs = () => {
    this.props.navigation.navigate( 'contactUs' )
  }

  // onPressHouseCategoriesSelect = () => {
  //   this.props.selectChildCategory( childCategory, this.props.navigation )
  //   this.props.navigation.navigate( 'contactUs' )
  // }

  renderSulotions = () => {
    const { houseCategories: { sulotions } } = this.props
    return Object.keys( sulotions ).map( e =>
      <CardContent
        description={sulotions[ e ].description}
        key={e}
        title={sulotions[ e ].title}
      />
    )
  }

  renderCaseStudies = () => {
    const { houseCategories: { caseStudies, urls } } = this.props
    return Object.keys( caseStudies ).map( e =>
      <CardContentImage
        description={caseStudies[ e ].description}
        key={e}
        title={caseStudies[ e ].title}
        url={object.getFirstByKey( {
          item: urls,
          key: 'imgs',
        } )}
      />
    )
  }

  render() {
    const { houseCategories: { description, title, urls } } = this.props

    return true
      ? <View style={styles.container}>
        <HeaderTitle
          buttonOnPress={this.onPressContactUs}
          buttontitle={'Contact Us'}
          containerstyle={styles.title}
          textTitle={title}
        />
        <View style={styles.thumbnailView}>
          <Slider urls={urls} />
        </View>
        <TextDescriptionCard
          containerstyle={styles.detailsView}
          title={description}
        />
        <HeaderSection
          containerstyle={styles.solution}
          textTitle={'Solution'}
        />
        {this.renderSulotions()}
        <HeaderSection
          containerstyle={styles.caseStudy}
          textTitle={'Case Study'}
        />
        {this.renderCaseStudies()}
      </View>
      : <View style={{ flex: 1 }}>
        <Spinner visible={true} />
      </View>
  }
}

HouseCategoriesCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  offer: PropTypes.object,
  reviewCount: PropTypes.number,
  reviewScore: PropTypes.number,
}

HouseCategoriesCard.defaultProps = {
  reviewCount: 0,
}

const mapStateToProps = state => ( {
  houseCategories: categoriesSelectors.houseCategoryelector( state ),
} )

export default connect( mapStateToProps, houseCategoriesActions )(
  HouseCategoriesCard
)
