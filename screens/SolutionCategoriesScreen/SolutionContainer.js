import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  actions as houseCategoriesActions,
  selectors as houseCategoriesSelectors,
} from 'modules/HouseCategories'

import {
  actions as caseStudiesActions,
  selectors as caseStudiesSelectors,
} from 'modules/CaseStudies'

import {
  actions as solutionsActions,
  selectors as solutionsSelectors,
} from 'modules/Solutions'

import {
  actions as solutionCategoriesActions,
  selectors as solutionCategoriesSelectors,
} from 'modules/SolutionCategories'

import PropTypes from 'prop-types'

import { object } from 'utilities'
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native'
import Colors from 'constants/Colors'
import { Icon } from 'react-native-elements'
import Spinner from 'react-native-loading-spinner-overlay'
import {
  ButtonRadiusOutlined,
  Card,
  CardSection,
  CardContent,
  CardContentImage,
  HeaderButtonSection,
  HeaderSection,
  HeaderTitle,
  Slider,
  TextDescriptionCard,
} from '@components'

import styles from './SolutionContainerStyle'

const { width, height } = Dimensions.get( 'window' )

class Solution extends Component {
  constructor( props ) {
    super( props )
  }

  async componentWillMount() {
    await this.props.initCaseStudiesScreen()
    await this.props.initSolutionsScreen()
  }

  shouldComponentUpdate( nextProps ) {
    return nextProps.isFetching !== this.props.isFetching ? true : false
  }

  onPressContactUs = () => {
    this.props.navigation.navigate( 'contactUs' )
  }

  onPressSolutionSelect = ( key, value ) => {
    this.props.setCurrentSolutions( key )
    this.props.navigation.navigate( 'solution', { solution: value } )
  }

  onPressContactUs = () => {
    this.props.navigation.navigate( 'contactUs' )
  }

  onPressContact = () => {
    this.props.navigation.navigate( 'contact' )
  }

  renderCaseStudies = () => {
    const { caseStudies } = this.props
    return Object.keys( caseStudies ).map( ( e, k ) =>
      <View
        style={{
          padding: 20,
          borderBottomWidth: 1,
          borderColor: '#ddd',
        }}
        key={`card-${ e }`}
      >
        <CardSection>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 25,
            }}
          >
            <Image
              style={{
                height: 100,
                width: 100,
              }}
              source={{
                uri: object.getFirstByKey( {
                  item: caseStudies[ e ].urls,
                  key: 'imgs',
                } ),
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <View />
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    width: width * 0.85 - 40,
                    alignContent: 'center',
                  }}
                >
                  {`MP C6002SP${ k }`}
                </Text>
              </View>
            </View>
          </View>
        </CardSection>
      </View>
    )
  }

  render() {
    const {
      isFetching,
      solutionCategory: { description, title, urls },
    } = this.props
    return !isFetching
      ? <View style={styles.container}>
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
          title={description}
        />
        <View style={styles.more}>
          <ButtonRadiusOutlined
            onPress={this.onPressContact}
            style={{ marginRight: 5 }}
            title={'Contact'}
          />
          <ButtonRadiusOutlined
            onPress={this.onPressContactUs}
            title={'Share'}
          />
        </View>
        <HeaderSection
          containerstyle={styles.products}
          textTitle={'Products'}
        />
        <View>
          {this.renderCaseStudies()}
        </View>
        <HeaderSection containerstyle={styles.price} textTitle={'Price'} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 40,
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
                {'ราคาต่ำสุด'}
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
                {'36,000 ฿'}
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
                {'ราคาสูงสุด'}
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
                {'45,000 ฿'}
              </Text>
            </View>
          </View>
        </View>
        <HeaderButtonSection
          buttonOnPress={this.onPressContactUs}
          buttontitle={'Faq'}
          containerstyle={styles.faq}
          textTitle={'FAQ'}
        />
      </View>
      : <Spinner visible={true} />
  }
}

Solution.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  offer: PropTypes.object,
  reviewCount: PropTypes.number,
  reviewScore: PropTypes.number,
}

Solution.defaultProps = {
  reviewCount: 0,
}
const combineActions = () => ( {
  ...caseStudiesActions,
  ...houseCategoriesActions,
  ...solutionsActions,
} )

const mapStateToProps = state => ( {
  caseStudies: caseStudiesSelectors.caseStudiesByIdSelector( state ),
  currentSolutionCategory: houseCategoriesSelectors.currentHouseCategorySelector(
    state
  ),
  solutionCategory: solutionCategoriesSelectors.solutionCategySelector( state ),
  isFetching: houseCategoriesSelectors.isFetchingSelector( state ),
  solutions: solutionsSelectors.solutionsByIdSelector( state ),
} )

export default connect( mapStateToProps, combineActions() )( Solution )
