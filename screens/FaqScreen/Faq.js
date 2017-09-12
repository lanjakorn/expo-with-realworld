import React from 'react'
import { Text, TextInput, View } from 'react-native'
import { Button } from 'react-native-elements'
import PropTypes from 'prop-types'
import Colors from 'constants/Colors'

import styles from './FaqStyle'

const Faq = ( {
  onPressAddFaq,
  question,
  titleQuestion,
  typingQuestion,
  typingTitleQuestion,
  words,
} ) => {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenTitle}>
        {words.question}
      </Text>
      <View style={styles.boxContainer}>
        <Text style={styles.boxTitle}>
          {words.title}
        </Text>
        <TextInput
          onChangeText={text => typingTitleQuestion( text )}
          style={styles.textInputStyle}
          underlineColorAndroid={Colors.darkTintColor}
          value={titleQuestion}
        />
      </View>
      <View style={styles.boxContainer}>
        <Text style={styles.boxTitle}>
          {words.message}
        </Text>
        <TextInput
          style={styles.textAreaStyle}
          multiline={true}
          numberOfLines={6}
          onChangeText={text => typingQuestion( text )}
          underlineColorAndroid={Colors.darkTintColor}
          value={question}
        />
      </View>
      <Button
        buttonStyle={styles.buttonStyle}
        textStyle={styles.buttonTextStyle}
        title={words.send}
        onPress={() =>
          onPressAddFaq( {
            answer: 'Ricoh Managed Print Services (MPS) encompass th...',
            productId: 'Prokey1',
            question: 'Managed Print Services',
            solutionCategoryId: 'keySolutionCategories1',
            syncApp: false,
          } )}
      />
    </View>
  )
}

Faq.propTypes = {
  onPressAddFaq: PropTypes.func.isRequired,
  question: PropTypes.string,
  titleQuestion: PropTypes.string,
  typingQuestion: PropTypes.func.isRequired,
  typingTitleQuestion: PropTypes.func.isRequired,
  words: PropTypes.object.isRequired,
}

export default Faq
