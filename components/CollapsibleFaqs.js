import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Accordion from 'react-native-collapsible/Accordion'
import { Icon } from 'react-native-elements'
import PropTypes from 'prop-types'

import values from 'lodash/values'
import { Colors } from 'constants'

const styles = StyleSheet.create( {
  descriptionText: {
    fontSize: 13,
    lineHeight: 20,
    textAlign: 'justify',
    color: Colors.textDescription,
  },
  rowDescription: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    padding: 20,
  },
  rowTitle: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    minWidth: 12,
    padding: 20,
  },
  titleText: {
    fontSize: 14,
  },
} )

const AccordionView = ( { faqs, onChange } ) => {
  const renderTitle = ( section, index, isActive ) => {
    return (
      <View style={styles.rowTitle}>
        <View
          style={{
            flex: 10,
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}
        >
          <Text style={styles.titleText}>
            {section.question}
          </Text>
        </View>
        <View
          style={{
            flex: 2,
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}
        >
          <Icon
            color={'white'}
            iconStyle={{
              color: Colors.iconGrey,
              textAlign: 'left',
              width: 25,
            }}
            name={isActive ? 'ios-arrow-up' : 'ios-arrow-down'}
            size={32}
            type={'ionicon'}
          />
        </View>
      </View>
    )
  }

  const renderDescription = section => {
    return (
      <View style={styles.rowDescription}>
        <View>
          <Text style={styles.descriptionText}>
            {section.answer}
          </Text>
        </View>
      </View>
    )
  }

  const computedFaqs = values( faqs )

  const onCollapsibleChang = index =>
    !isNaN( parseInt( index ) ) && onChange( computedFaqs[ index ].question )

  return (
    <Accordion
      onChange={index => onCollapsibleChang( index )}
      renderContent={renderDescription}
      renderHeader={renderTitle}
      sections={computedFaqs}
      underlayColor="transparent"
    />
  )
}

AccordionView.propTypes = {
  faqs: PropTypes.object,
  onChange: PropTypes.func.isRequired,
}

export default AccordionView
