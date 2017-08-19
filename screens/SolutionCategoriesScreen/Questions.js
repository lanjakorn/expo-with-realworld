import React from 'react'
import values from 'lodash/values'
import Accordion from 'react-native-collapsible/Accordion'
import { View, Text } from 'react-native'
import { Colors } from 'constants'
import { Icon } from 'react-native-elements'

const styles = {
  header: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    minWidth: 12,
    padding: 20,
  },
  content: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    padding: 20,
  },
  headerText: {
    fontSize: 14,
  },
  contentText: {
    color: Colors.textDescription,
    fontSize: 13,
  },
}

const AccordionView = ( { questions } ) => {
  const renderHeader = ( section, index, isActive ) => {
    return (
      <View style={styles.header}>
        <View
          style={{
            flex: 10,
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}
        >
          <Text style={styles.headerText}>
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

  const renderContent = section => {
    return (
      <View style={styles.content}>
        <View>
          <Text style={styles.contentText}>
            {section.answer}
          </Text>
        </View>
      </View>
    )
  }

  return (
    <Accordion
      underlayColor="transparent"
      sections={values( questions )}
      renderHeader={renderHeader}
      renderContent={renderContent}
    />
  )
}

export default AccordionView
