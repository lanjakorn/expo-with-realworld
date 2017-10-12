import React from 'react'
import { Text, TextInput, View } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'
import { Button } from 'react-native-elements'
import PropTypes from 'prop-types'
import Colors from 'constants/Colors'

import { TextError } from 'components'
import styles from './FaqStyle'

const Faq = ( {
  enableButton,
  isAddFetching,
  onPressAddFaq,
  question,
  selectStyleTextInput,
  submissionError,
  titleQuestion,
  typingQuestion,
  typingTitleQuestion,
  words,
  submissionError: { errors, pass },
} ) => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenTitle}>{words.question}</Text>
    <View style={styles.boxContainer}>
      <Text style={styles.boxTitle}>{words.title}</Text>
      <TextInput
        onChangeText={text => typingTitleQuestion( text )}
        style={selectStyleTextInput( styles.textInputStyle, 'titleQuestion' )}
        underlineColorAndroid={Colors.darkTintColor}
        value={titleQuestion}
      />
      {Object.keys( submissionError ).length !== 0 &&
        !pass && <TextError errors={errors} prop={'titleQuestion'} />}
    </View>
    <View style={styles.boxContainer}>
      <Text style={styles.boxTitle}>{words.message}</Text>
      <TextInput
        style={selectStyleTextInput( styles.textAreaStyle, 'question' )}
        multiline={true}
        numberOfLines={6}
        onChangeText={text => typingQuestion( text )}
        underlineColorAndroid={Colors.darkTintColor}
        value={question}
      />
      {Object.keys( submissionError ).length !== 0 &&
        !pass && <TextError errors={errors} prop={'question'} />}
    </View>
    {isAddFetching && (
      <View style={{ flex: 1 }}>
        <Spinner visible={true} />
      </View>
    )}
    <Button
      buttonStyle={styles.buttonStyle}
      disabled={!enableButton}
      textStyle={styles.buttonTextStyle}
      title={words.send}
      onPress={() => onPressAddFaq()}
    />
  </View>
)

Faq.propTypes = {
  enableButton: PropTypes.bool.isRequired,
  isAddFetching: PropTypes.bool.isRequired,
  onPressAddFaq: PropTypes.func.isRequired,
  question: PropTypes.string,
  selectStyleTextInput: PropTypes.func.isRequired,
  submissionError: PropTypes.object.isRequired,
  titleQuestion: PropTypes.string,
  typingQuestion: PropTypes.func.isRequired,
  typingTitleQuestion: PropTypes.func.isRequired,
  words: PropTypes.object.isRequired,
}

export default Faq
