import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectors as productsSelectors } from 'modules/Products'

import { ScrollView, View, Text, Image, StyleSheet } from 'react-native'
import { TextDescriptionCard } from '@components'

const styles = StyleSheet.create( {
  screenContainer: {
    backgroundColor: '#fff',
  },
  detailsView: {
    // marginTop: 35,
    // marginBottom: 22,
    // paddingLeft: 20,
    // paddingRight: 20,
  },
  featureContainer: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 5,
    textAlign: 'center',
  },
  featureImageContainer: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  featureImage: {
    height: 200,
    width: 200,
  },
  featureDescription1: { marginTop: 10 },
  featureDescription2: {
    marginTop: 10,
    textAlign: 'justify',
  },
  featureInstruction: { marginTop: 10 },
  featureInstructionContainer: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  featureInstructionTitle: {
    fontSize: 14,
    //fontWeight: 'bold',
    marginTop: 15,
  },
} )

class FeatureScreen extends Component {
  state = {
    instructionTitle: 'วิธีการใช้',
    instructions: [
      'Accusamus quam quis qui.',
      'Harum nesciunt minus est placeat.',
      'Cumque voluptate veritatis aperiam debitis.',
      'Ut sit voluptatem expedita consectetur.',
    ],
  }

  renderInstruction() {
    return this.state.instructions.map( ( instruction, i ) => {
      return (
        <Text key={i} style={{ fontSize: 14 }}>
          {`${ i + 1 }.  ${ instruction }`}
        </Text>
      )
    } )
  }

  render() {
    const { instructionTitle } = this.state

    const {
      navigation,
      productOfProductCategory,
      productOfSolutionCategory,
    } = this.props
    const { features } =
      navigation.state.params.module === 'productCategories'
        ? productOfProductCategory
        : productOfSolutionCategory

    const { title, imgUrl, description } = features[
      navigation.state.params.index
    ]

    const {
      screenContainer,
      featureContainer,
      featureTitle,
      featureImageContainer,
      featureImage,
      featureInstructionTitle,
      featureInstructionContainer,
    } = styles
    return (
      <ScrollView style={screenContainer}>
        <View style={featureContainer}>
          <Text style={featureTitle}>
            {title}
          </Text>
          <View style={featureImageContainer}>
            <Image
              style={featureImage}
              source={{
                uri: imgUrl,
              }}
            />
          </View>
          <TextDescriptionCard
            containerstyle={styles.detailsView}
            textStyle={{ fontWeight: '500' }}
            title={description}
          />
          <Text style={featureInstructionTitle}>
            {instructionTitle}
          </Text>
          <View style={featureInstructionContainer}>
            {this.renderInstruction()}
          </View>
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = state => ( {
  productOfProductCategory: productsSelectors.productOfProductCategorySelector(
    state
  ),
  productOfSolutionCategory: productsSelectors.productOfSolutionCategorySelector(
    state
  ),
} )

export default connect( mapStateToProps )( FeatureScreen )
