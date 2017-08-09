import React, { Component } from 'react'
import Accordion from 'react-native-collapsible/Accordion'
import { View, Text } from 'react-native'
import { Colors } from 'constants'
import { Icon } from 'react-native-elements'

const SECTIONS = [
  {
    title:
      'Et perspiciatis dolor perferendis laboriosam enim Et perspiciatis dolor perferendis laboriosam enim.',
    content:
      'Quam omnis sapiente autem sit quia quod consequatur. Est quo est. At in sunt placeat repudiandae sint aperiam ut rerum est. Quidem quia necessitatibus provident omnis commodi rerum omnis voluptatem. Veniam in ut non quo qui minima. Magnam qui aut incidunt. Debitis molestias esse. Dolore laudantium qui. Hic rem consequatur molestiae. Corrupti officia explicabo eligendi eum. Et dolorem ut natus laborum deleniti est. Id ut neque fugit et qui qui minus. Neque vel et ex beatae aut libero rerum deserunt omnis. Odio fugit numquam quod voluptates asperiores aut quasi rerum.',
  },
  {
    title: 'Et perspiciatis dolor perferendis laboriosam enim.',
    content:
      'Quam omnis sapiente autem sit quia quod consequatur. Est quo est. At in sunt placeat repudiandae sint aperiam ut rerum est. Quidem quia necessitatibus provident omnis commodi rerum omnis voluptatem. Veniam in ut non quo qui minima. Magnam qui aut incidunt. Debitis molestias esse. Dolore laudantium qui. Hic rem consequatur molestiae. Corrupti officia explicabo eligendi eum. Et dolorem ut natus laborum deleniti est. Id ut neque fugit et qui qui minus. Neque vel et ex beatae aut libero rerum deserunt omnis. Odio fugit numquam quod voluptates asperiores aut quasi rerum.',
  },
  {
    title: 'Et perspiciatis dolor perferendis laboriosam enim.',
    content:
      'Quam omnis sapiente autem sit quia quod consequatur. Est quo est. At in sunt placeat repudiandae sint aperiam ut rerum est. Quidem quia necessitatibus provident omnis commodi rerum omnis voluptatem. Veniam in ut non quo qui minima. Magnam qui aut incidunt. Debitis molestias esse. Dolore laudantium qui. Hic rem consequatur molestiae. Corrupti officia explicabo eligendi eum. Et dolorem ut natus laborum deleniti est. Id ut neque fugit et qui qui minus. Neque vel et ex beatae aut libero rerum deserunt omnis. Odio fugit numquam quod voluptates asperiores aut quasi rerum.',
  },
  {
    title: 'Et perspiciatis dolor perferendis laboriosam enim.',
    content:
      'Quam omnis sapiente autem sit quia quod consequatur. Est quo est. At in sunt placeat repudiandae sint aperiam ut rerum est. Quidem quia necessitatibus provident omnis commodi rerum omnis voluptatem. Veniam in ut non quo qui minima. Magnam qui aut incidunt. Debitis molestias esse. Dolore laudantium qui. Hic rem consequatur molestiae. Corrupti officia explicabo eligendi eum. Et dolorem ut natus laborum deleniti est. Id ut neque fugit et qui qui minus. Neque vel et ex beatae aut libero rerum deserunt omnis. Odio fugit numquam quod voluptates asperiores aut quasi rerum.',
  },
]

const styles = {
  header: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    borderRadius: 2,
    flexDirection: 'row',
    minWidth: 12,
    padding: 15,
  },
  content: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    borderRadius: 2,
    flexDirection: 'row',
    padding: 15,
  },
  headerText: {
    fontSize: 14,
  },
  contentText: {
    color: Colors.textDescription,
    fontSize: 13,
  },
}

class AccordionView extends Component {
  renderHeader( section, index, isActive ) {
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
            {section.title}
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

  renderContent( section ) {
    return (
      <View style={styles.content}>
        <View>
          <Text style={styles.contentText}>
            {section.content}
          </Text>
        </View>
      </View>
    )
  }

  render() {
    return (
      <Accordion
        underlayColor="transparent"
        sections={SECTIONS}
        renderHeader={this.renderHeader}
        renderContent={this.renderContent}
      />
    )
  }
}

export default AccordionView
