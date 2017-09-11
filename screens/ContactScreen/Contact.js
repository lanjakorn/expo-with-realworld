import React from 'react'
import { Image, Platform, Text, View } from 'react-native'
import { Card } from 'react-native-elements'
import PropTypes from 'prop-types'

import styles from './ContactStyle'

const Contact = ( { contact } ) => {
  const renderContactHeader = () => {
    const { imgUrl } = contact

    return (
      <View>
        <Text style={styles.contactHeaderText}>CONTACT</Text>
        <View
          style={
            Platform.OS === 'ios'
              ? styles.imageIosContainer
              : styles.imageAndroidContainer
          }
        >
          <Image
            style={styles.image}
            source={{
              uri: imgUrl,
            }}
          />
        </View>
      </View>
    )
  }

  const renderContactInfo = () =>
    <View style={styles.container}>
      {Object.keys( contact ).filter( e => e !== 'imgUrl' ).map( ( Objkey, i ) => {
        return (
          <View style={styles.contactBodyItem} key={i}>
            <Text style={styles.contactBodyTitle}>
              {Objkey}
            </Text>
            <Text style={styles.contactBodyColon}>:</Text>
            <Text style={styles.contactBodyText}>
              {contact[ Objkey ]}
            </Text>
          </View>
        )
      } )}
    </View>

  return (
    <View>
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
