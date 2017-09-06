import React from 'react'
import PropTypes from 'prop-types'

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
    marginTop: 15,
  },
} )

const FeatureScreen = ( { navigation, words, product: { features } } ) => {
  const instructions = [
    'Accusamus quam quis qui.',
    'Harum nesciunt minus est placeat.',
    'Cumque voluptate veritatis aperiam debitis.',
    'Ut sit voluptatem expedita consectetur.',
  ]

  const renderInstruction = () => {
    return instructions.map( ( instruction, i ) => {
      return (
        <Text key={i} style={{ fontSize: 14 }}>
          {`${ i + 1 }.  ${ instruction }`}
        </Text>
      )
    } )
  }

  const { title, imgUrl, description } = features[ navigation.state.params.index ]
  return (
    <ScrollView style={styles.screenContainer}>
      <View style={styles.featureContainer}>
        <Text style={styles.featureTitle}>
          {title}
        </Text>
        <View style={styles.featureImageContainer}>
          <Image
            style={styles.featureImage}
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
        <Text style={styles.featureInstructionTitle}>
          {words.HowToUse}
        </Text>
        <View style={styles.featureInstructionContainer}>
          {renderInstruction()}
        </View>
      </View>
    </ScrollView>
  )
}

FeatureScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired,
  words: PropTypes.object.isRequired,
}

export default FeatureScreen
