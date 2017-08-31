import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  actions as productsActions,
  selectors as productsSelectors,
} from 'modules/Products'
import Colors from 'constants/Colors'

import { Platform, View, Text, Image, StyleSheet } from 'react-native'
import { Card } from 'react-native-elements'

const styles = StyleSheet.create( {
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  cardContainer: {
    flex: 1,
    marginBottom: 25,
  },
  contactHeaderText: {
    fontSize: 17,
    fontWeight: 'bold',
    paddingBottom: 25,
    paddingTop: 10,
    textAlign: 'center',
  },
  imageIosContainer: {
    borderColor: '#ddd',
    elevation: 1,
    marginTop: -1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    alignItems: 'center',
  },
  imageAndroidContainer: {
    alignItems: 'center',
  },
  image: {
    borderColor: '#ddd',
    borderRadius: 112.5,
    borderWidth: 1,
    marginBottom: 25,
    height: 225,
    width: 225,
  },
  contactBodyContainer: {
    justifyContent: 'center',
    paddingTop: 10,
  },
  contactBodyItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  contactBodyTitle: {
    color: Colors.tintColor,
    flex: 4,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  contactBodyColon: {
    flex: 1,
    textAlign: 'center',
  },
  contactBodyText: {
    flex: 4,
    textAlign: 'left',
    width: 110,
  },
} )

class ContactScreen extends Component {
  getContactByModule() {
    const {
      navigation,
      contactOfProductFromProductCategory,
      contactOfProductFromSolutionCategory,
    } = this.props
    return navigation.state.params.module === 'productCategories'
      ? contactOfProductFromProductCategory
      : contactOfProductFromSolutionCategory
  }

  renderContactHeader() {
    const { imgUrl } = this.getContactByModule()
    const {
      contactHeaderText,
      image,
      imageIosContainer,
      imageAndroidContainer,
    } = styles

    return (
      <View>
        <Text style={contactHeaderText}>CONTACT</Text>
        <View
          style={
            Platform.OS === 'ios' ? imageIosContainer : imageAndroidContainer
          }
        >
          <Image
            style={image}
            source={{
              uri: imgUrl,
            }}
          />
        </View>
      </View>
    )
  }

  renderContactInfo() {
    const {
      container,
      contactBodyColon,
      contactBodyItem,
      contactBodyText,
      contactBodyTitle,
    } = styles

    return (
      <View style={container}>
        {Object.keys( this.getContactByModule() )
          .filter( e => e !== 'imgUrl' )
          .map( ( Objkey, i ) => {
            return (
              <View style={contactBodyItem} key={i}>
                <Text style={contactBodyTitle}>
                  {Objkey}
                </Text>
                <Text style={contactBodyColon}>:</Text>
                <Text style={contactBodyText}>
                  {this.getContactByModule()[ Objkey ]}
                </Text>
              </View>
            )
          } )}
      </View>
    )
  }

  render() {
    return (
      <View>
        <Card containerStyle={styles.cardContainer}>
          {this.renderContactHeader()}
          {this.renderContactInfo()}
        </Card>
      </View>
    )
  }
}

const combineActions = () => ( {
  ...productsActions,
} )

const mapStateToProps = state => ( {
  contactOfProductFromProductCategory: productsSelectors.getFirstContactOfProductFromProductCategorySelector(
    state
  ),
  contactOfProductFromSolutionCategory: productsSelectors.getFirstContactOfProductFromSolutionCategorySelector(
    state
  ),
} )

export default connect( mapStateToProps, combineActions() )( ContactScreen )
