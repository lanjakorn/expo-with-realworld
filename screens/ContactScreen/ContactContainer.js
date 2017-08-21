import React, { Component } from 'react'
import { Platform, View, Text, Image, StyleSheet } from 'react-native'
import { Card } from 'react-native-elements'
import Colors from 'constants/Colors'

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
    borderColor: '#ddd',
    elevation: 1,
    marginTop: -1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    alignItems: 'center',
  },
  imageAndroidContainer: {
    alignItems: 'center',
  },
  image: {
    borderColor: '#ddd',
    borderRadius: 112.5,
    borderWidth: 1,
    marginBottom: 25,
    height: 225,
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
    color: Colors.tintColor,
    flex: 4,
    fontWeight: 'bold',
    textAlign: 'right',
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

class ContactScreen extends Component {
  state = {
    imageContact:
      'https://www.mendetails.com/wp-content/uploads/2015/10/JD3.jpg',
    contactInfo: {
      Name: 'Loyal Von MD',
      Position: 'Marketing',
      Department: 'Lake Melyssa, AZ 36398',
      Tel: '088 888 8888',
      Email: 'Loyal70@xxx.com',
    },
  }

  renderContactHeader() {
    const { imageContact } = this.state
    const {
      contactHeaderText,
      image,
      imageIosContainer,
      imageAndroidContainer,
    } = styles
    return (
      <View>
        <Text style={contactHeaderText}>CONTACT</Text>
        <View
          style={
            Platform.OS === 'ios' ? imageIosContainer : imageAndroidContainer
          }
        >
          <Image
            style={image}
            source={{
              uri: imageContact,
            }}
          />
        </View>
      </View>
    )
  }

  renderContactInfo() {
    const { contactInfo } = this.state
    const {
      container,
      contactBodyColon,
      contactBodyItem,
      contactBodyText,
      contactBodyTitle,
    } = styles
    return (
      <View style={container}>
        {Object.keys( contactInfo ).map( ( Objkey, i ) => {
          return (
            <View style={contactBodyItem} key={i}>
              <Text style={contactBodyTitle}>
                {Objkey}
              </Text>
              <Text style={contactBodyColon}>:</Text>
              <Text style={contactBodyText}>
                {contactInfo[ Objkey ]}
              </Text>
            </View>
          )
        } )}
      </View>
    )
  }

  render() {
    return (
      <View>
        <Card containerStyle={styles.cardContainer}>
          {this.renderContactHeader()}
          {this.renderContactInfo()}
        </Card>
      </View>
    )
  }
}

export default ContactScreen
