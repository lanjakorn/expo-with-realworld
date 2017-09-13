import React from 'react'
import { Text, TextInput, View } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'
import { Button } from 'react-native-elements'
import PropTypes from 'prop-types'
import Colors from 'constants/Colors'

import styles from './FaqStyle'

const Faq = ( {
  enableButton,
  isAddFetching,
  onPressAddFaq,
  question,
  submissionError,
  titleQuestion,
  typingQuestion,
  typingTitleQuestion,
  words,
  submissionError: { errors, pass, visit = false },
} ) => {
  const renderTitleQuestionError = () =>
    <View key={errors[ 'titleQuestion' ]}>
      <Text
        key={`${ errors[ 'titleQuestion' ][ 0 ] }`}
        style={{ paddingTop: 5, color: 'firebrick' }}
      >
        {errors[ 'titleQuestion' ][ 0 ]}
      </Text>
    </View>

  const renderQuestionError = () =>
    <View key={errors[ 'question' ]}>
      <Text
        key={`${ errors[ 'question' ][ 0 ] }`}
        style={{ paddingTop: 5, color: 'firebrick' }}
      >
        {errors[ 'question' ][ 0 ]}
      </Text>
    </View>

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
          style={[
            styles.textInputStyle,
            {
              borderColor:
                ( Object.keys( submissionError ).length !== 0 &&
                  errors[ 'titleQuestion' ].length === 0 ) ||
                !visit
                  ? '#FFF'
                  : 'firebrick',
            },
          ]}
          underlineColorAndroid={Colors.darkTintColor}
          value={titleQuestion}
        />
        {Object.keys( submissionError ).length !== 0 &&
          !pass &&
          renderTitleQuestionError()}
      </View>
      <View style={styles.boxContainer}>
        <Text style={styles.boxTitle}>
          {words.message}
        </Text>
        <TextInput
          style={[
            styles.textAreaStyle,
            {
              borderColor:
                ( Object.keys( submissionError ).length !== 0 &&
                  errors[ 'question' ].length === 0 ) ||
                !visit
                  ? '#FFF'
                  : 'firebrick',
            },
          ]}
          multiline={true}
          numberOfLines={6}
          onChangeText={text => typingQuestion( text )}
          underlineColorAndroid={Colors.darkTintColor}
          value={question}
        />
        {Object.keys( submissionError ).length !== 0 &&
          !pass &&
          renderQuestionError()}
      </View>
      {isAddFetching &&
        <View style={{ flex: 1 }}>
          <Spinner visible={true} />
        </View>}
      <Button
        buttonStyle={styles.buttonStyle}
        disabled={!enableButton}
        textStyle={styles.buttonTextStyle}
        title={words.send}
        onPress={() => onPressAddFaq()}
      />
    </View>
  )
}

Faq.propTypes = {
  enableButton: PropTypes.bool.isRequired,
  isAddFetching: PropTypes.bool.isRequired,
  onPressAddFaq: PropTypes.func.isRequired,
  question: PropTypes.string,
  submissionError: PropTypes.object.isRequired,
  titleQuestion: PropTypes.string,
  typingQuestion: PropTypes.func.isRequired,
  typingTitleQuestion: PropTypes.func.isRequired,
  words: PropTypes.object.isRequired,
}

export default Faq
