import React from 'react'
import PropTypes from 'prop-types'
import { Colors } from 'constants'

import { Platform, View, Text, Image, StyleSheet } from 'react-native'
import { Card } from 'react-native-elements'

const styles = StyleSheet.create( {
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  cardContainer: {
    flex: 1,
    marginBottom: 25,
  },
  contactHeaderText: {
    fontSize: 17,
    fontWeight: 'bold',
    paddingBottom: 25,
    paddingTop: 10,
    textAlign: 'center',
  },
  imageIosContainer: {
    alignItems: 'center',
    borderColor: '#ddd',
    elevation: 1,
    marginTop: -1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  imageAndroidContainer: {
    alignItems: 'center',
  },
  image: {
    borderColor: '#ddd',
    borderRadius: 112.5,
    borderWidth: 1,
    height: 225,
    marginBottom: 25,
    width: 225,
  },
  contactBodyContainer: {
    justifyContent: 'center',
    paddingTop: 10,
  },
  contactBodyItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  contactBodyTitle: {
    flex: 4,
    fontWeight: 'bold',
    textAlign: 'right',
    color: Colors.tintColor,
  },
  contactBodyColon: {
    flex: 1,
    textAlign: 'center',
  },
  contactBodyText: {
    flex: 4,
    textAlign: 'left',
    width: 110,
  },
} )

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
