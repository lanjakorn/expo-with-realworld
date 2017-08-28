import React, { Component } from 'react'
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native'

class FeatureScreen extends Component {
  state = {
    title: 'feature 1',
    image:
      'https://www.bhphotovideo.com/images/images500x500/ricoh_407587_sp_213nw_laser_printer_1109659.jpg',
    description1:
      'Magnam quia totam dolorem aut consectetur delectus aut ut. Quasi a aliquid dicta itaque est et quisquam sed cumque. Ex unde id iste totam asperiores ut alias. Consequatur commodi occaecati architecto vel.',
    description2:
      'Quis earum qui aut eveniet. Quibusdam ipsa ea. Voluptas incidunt libero sunt maiores at totam voluptatem. Deleniti quia est. Sapiente eum sunt velit pariatur sapiente dolore vitae.',
    instructionTitle: 'วิธีการใช้',
    instructions: [
      'Accusamus quam quis qui.',
      'Harum nesciunt minus est placeat.',
      'Cumque voluptate veritatis aperiam debitis.',
      'Ut sit voluptatem expedita consectetur.',
    ],
  }

  renderInstruction() {
    return this.state.instructions.map( ( instruction, i ) => {
      return (
        <Text key={i}>
          {`${ i + 1 }.  ${ instruction }`}
        </Text>
      )
    } )
  }

  render() {
    const {
      title,
      image,
      description1,
      description2,
      instructionTitle,
      instructions,
    } = this.state
    const {
      screenContainer,
      featureContainer,
      featureTitle,
      featureImageContainer,
      featureImage,
      featureDescription1,
      featureDescription2,
      featureInstruction,
      featureInstructionTitle,
      featureInstructionContainer,
    } = styles
    return (
      <ScrollView style={screenContainer}>
        <View style={featureContainer}>
          <Text style={featureTitle}>
            {title}
          </Text>
          <View style={featureImageContainer}>
            <Image
              style={featureImage}
              source={{
                uri: image,
              }}
            />
          </View>
          <Text style={featureDescription2}>
            {description2}
          </Text>
          <Text style={featureInstructionTitle}>
            {instructionTitle}
          </Text>
          <View style={featureInstructionContainer}>
            {this.renderInstruction()}
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create( {
  screenContainer: {
    backgroundColor: '#fff',
  },
  featureContainer: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  featureTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 5,
    textAlign: 'center',
  },
  featureImageContainer: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
  },
  featureImage: {
    height: 200,
    width: 200,
  },
  featureDescription1: { marginTop: 10 },
  featureDescription2: {
    marginTop: 10,
    textAlign: 'justify',
  },
  featureInstruction: { marginTop: 10 },
  featureInstructionContainer: {
    // paddingLeft: 20,
    paddingTop: 15,
    paddingBottom: 15,
  },
  featureInstructionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
  },
} )

export default FeatureScreen
