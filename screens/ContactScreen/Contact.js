import React from 'react'
import { Image, Text, View, Linking } from 'react-native'
import { Card, Icon } from 'react-native-elements'
import PropTypes from 'prop-types'
import { object } from 'utilities'
const { omit } = object

import styles from './ContactStyle'

const Contact = ( { contact, contact: { imgUrl, name, department } } ) => {
  const renderContactHeader = () => (
    <View style={styles.cardHeaderContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: imgUrl,
          }}
        />
        <Text style={styles.contactHeaderName}>{name}</Text>
        <Text style={styles.contactHeaderdDepartment}>{department}</Text>
        <View style={styles.contactHeaderIconContainer}>
          <Icon
            iconStyle={styles.contactHeaderIcon}
            name="phone-in-talk"
            onPress={handleTel}
            underlayColor="transparent"
          />
          <Icon
            iconStyle={styles.contactHeaderIcon}
            name="email"
            onPress={handleEmailTo}
            underlayColor="transparent"
          />
        </View>
      </View>
    </View>
  )
  const handleTel = () => {
    Linking.openURL( 'tel:1242' ).catch( err => console.log( 'Error:', err ) )
  }

  const handleEmailTo = () => {
    Linking.openURL(
      'mailto:somethingemail@gmail.com?subject=abcdefg&body=body'
    ).catch( err => console.log( 'Error:', err ) )
  }

  const renderContactInfo = () => (
    <View style={styles.contactBodyContainer}>
      {Object.keys( omit( 'imgUrl', contact ) ).map( ( Objkey, i ) => (
        <View style={styles.contactBodyItem} key={i}>
          <Text style={styles.contactBodyTitle}>{Objkey}</Text>
          <Text style={styles.contactBodyColon}>:</Text>
          <Text style={styles.contactBodyText}>{contact[ Objkey ]}</Text>
        </View>
      ) )}
    </View>
  )

  return (
    <View style={styles.cardWrapper}>
      <Card containerStyle={styles.cardContainer}>
        {renderContactHeader()}
        {renderContactInfo()}
      </Card>
    </View>
  )
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
}

export default Contact
