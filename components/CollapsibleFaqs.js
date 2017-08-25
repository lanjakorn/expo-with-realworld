import React from 'react'
import values from 'lodash/values'
import Accordion from 'react-native-collapsible/Accordion'
import { View, Text } from 'react-native'
import { Colors } from 'constants'
import { Icon } from 'react-native-elements'

const styles = {
  rowTitle: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    minWidth: 12,
    padding: 20,
  },
  rowDescription: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    padding: 20,
  },
  titleText: {
    fontSize: 14,
  },
  descriptionText: {
    color: Colors.textDescription,
    fontSize: 13,
    lineHeight: 20,
    textAlign:'justify',
  },
}

const AccordionView = ( { faqs } ) => {
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

  return (
    <Accordion
      underlayColor="transparent"
      sections={values( faqs )}
      renderHeader={renderTitle}
      renderContent={renderDescription}
    />
  )
}

export default AccordionView
