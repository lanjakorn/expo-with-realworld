import React, { Component } from 'react'
import { connect } from 'react-redux'
import verticalMenu from 'mocks/verticalMenu.json'

import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import { actions as caseStudiesActions } from 'modules/CaseStudies'
import { actions as homeActions } from 'modules/Home'
import { actions as contactsActions } from 'modules/Contacts'

import { actions as solutionsActions } from 'modules/Solutions'
import { actions as solutionCategoriesActions } from 'modules/SolutionCategories'
import { actions as faqsAction } from 'modules/Faqs'

import { Card } from '@components'

const { height, width } = Dimensions.get( 'window' )

const styles = StyleSheet.create( {
  searchListItemStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
  },
  backgroundImage: {
    alignItems: 'center',
    flexDirection: 'row',
    height: height * 0.2 - 20,
    width: width * 1,
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  text: {
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
  },
} )

class SearchListContainer extends Component {
  constructor( props ) {
    super( props )
  }

  // async componentWillMount() {
  //   await this.props.getSearchHistory()
  // }

  async componentWillMount() {
    // await this.props.initCaseStudiesScreen()
    await this.props.initHomeScreen()
  }

  onPressMenuSelect = ( { navigate, title } ) => {
    this.props.navigation.navigate( navigate, { category: title } )
  }

  render() {
    return (
      <ScrollView>
        {Object.keys( verticalMenu ).map( e =>
          <TouchableOpacity
            key={e}
            onPress={() => this.onPressMenuSelect( verticalMenu[ e ] )}
          >
            <Card margin={0} backgroundColor={'white'}>
              <View style={styles.searchListItemStyle}>
                <Image
                  key={`image-${ e }`}
                  style={styles.backgroundImage}
                  resizeMode="cover"
                  source={require( '../../assets/images/house-menu-item.png' )}
                >
                  <Text style={styles.text} numberOfLines={1}>
                    {verticalMenu[ e ].title}
                  </Text>
                </Image>
              </View>
            </Card>
          </TouchableOpacity>
        )}
      </ScrollView>
    )
  }
}

const combineActions = () => ( {
  ...caseStudiesActions,
  ...contactsActions,
  ...solutionsActions,
  ...solutionCategoriesActions,
  ...faqsAction,
  ...homeActions,
} )

const mapStateToProps = state => ( {
  isFetching: state.categories.isFetching,
} )

export default connect( mapStateToProps, combineActions() )( SearchListContainer )
