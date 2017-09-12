import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import PropTypes from 'prop-types'
import { nav } from 'utilities'
import { TextDescriptionCard } from '@components'
import styles from './FeatureStyle'

// TODO: move instructions prop to firebase
const FeatureScreen = ( { navigation, words, product: { features } } ) => {
  const instructions = [
    'Accusamus quam quis qui.',
    'Harum nesciunt minus est placeat.',
    'Cumque voluptate veritatis aperiam debitis.',
    'Ut sit voluptatem expedita consectetur.',
  ]

  const renderInstruction = () =>
    instructions.map( ( instruction, i ) =>
      <Text key={i} style={{ fontSize: 14 }}>
        {`${ i + 1 }.  ${ instruction }`}
      </Text>
    )

  const { title, imgUrl, description } = features[
    nav.getNavigationParam( navigation, 'index' )
  ]

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
