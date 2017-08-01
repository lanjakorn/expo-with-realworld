import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions, selectors } from 'modules/Settings'
import { Colors } from 'constants'

import { ScrollView, StyleSheet, View, Text, AsyncStorage } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { List, ListItem, Icon } from 'react-native-elements'
import { Search } from '@components'

class SettingsScreen extends Component {
  static navigationOptions = ( { navigation } ) => {
    return {
      tabBarLabel: 'Settings',
      tabBarIcon: ( { tintColor, focused } ) =>
        <Icon
          name={'settings'}
          size={24}
          color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />,
      header: (
        <View style={{ backgroundColor: Colors.tintColor }}>
          <View style={{ marginTop: 24, height: 40 }}>
            <Search navigation={navigation} />
          </View>
        </View>
      ),
    }
  }

  async componentDidMount() {
    await this.props.getDefaultTab()
    await this.props.getAutoComplete()
    await this.props.getSaveRecent()
  }

  onChangeAutoComplete = () => {
    this.props.changeAutoComplete( !this.props.autocomplete )
  }

  onChangeSaveRecents = () => {
    this.props.changeSaveRecent( !this.props.save_recent )
  }

  onDefaultStorySetting = () => {
    this.props.navigation.navigate( 'defaultTabSetting' )
  }

  onReadabilitySetting = () => {
    this.props.navigation.navigate( 'readabilitySetting' )
  }

  onRegionSetting = () => {
    this.props.navigation.navigate( 'regionSetting' )
  }

  onSourcesSetting = () => {
    this.props.navigation.navigate( 'sourcesSetting' )
  }

  async onClearRecents() {
    await AsyncStorage.clear()
  }

  render() {
    return (
      <ScrollView style={styles.settigsGreyBackground}>
        <InfoText text="General" />
        <List>
          <ListItem
            title="Home"
            titleStyle={{ fontSize: 18 }}
            rightTitle={this.props.default_tab}
            onPress={this.onDefaultStorySetting}
          />
        </List>
        <InfoText text="Stories" />
        <List>
          <ListItem
            title="Sources"
            titleStyle={{ fontSize: 18 }}
            onPress={this.onSourcesSetting}
          />
          <ListItem
            title="Readability"
            titleStyle={{ fontSize: 18 }}
            onPress={this.onReadabilitySetting}
          />
        </List>
        <InfoText text="Search" />
        <List>
          <ListItem
            switchButton={true}
            title="Autocomplete"
            titleStyle={{ fontSize: 18 }}
            hideChevron
            switchOnTintColor={Colors.tintColor}
            switched={this.props.autocomplete}
            onSwitch={this.onChangeAutoComplete}
          />
          <ListItem
            title="Region"
            rightTitle="None (Default)"
            titleStyle={{ fontSize: 18 }}
            onPress={this.onRegionSetting}
          />
        </List>
        <InfoText text="Privacy" />
        <List>
          <ListItem
            switchButton={true}
            title="Save Recents"
            titleStyle={{ fontSize: 18 }}
            hideChevron
            switchOnTintColor={Colors.tintColor}
            switched={this.props.save_recent}
            onSwitch={this.onChangeSaveRecents}
          />
          <ListItem
            title="Clear Recents"
            hideChevron
            titleStyle={{ fontSize: 18 }}
            onPress={this.onClearRecents}
          />
        </List>
        <InfoText text="Other" />
        <List>
          <ListItem title="Send Feedback" titleStyle={{ fontSize: 18 }} />
          <ListItem title="Share" titleStyle={{ fontSize: 18 }} />
          <ListItem title="Leave a Rating" titleStyle={{ fontSize: 18 }} />
        </List>
        <InfoText text="Version 0.1.1" />
        <View style={{ paddingBottom: 50 }} />
      </ScrollView>
    )
  }
}

class InfoText extends Component {
  render() {
    return (
      <Text style={styles.infoTextStyle}>
        {this.props.text}
      </Text>
    )
  }
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
  },
  reduceHeight: {
    height: 5,
  },
  infoTextStyle: {
    fontSize: 14,
    paddingTop: 20,
    marginLeft: 20,
    color: 'black',
    opacity: 0.7,
  },
  settigsGreyBackground: {
    backgroundColor: 'rgba(247, 247, 247, 1)',
    paddingTop: 20,
  },
} )

const mapStateToProps = state => ( {
  ...selectors.getSettings( state ),
} )

export default connect( mapStateToProps, actions )( SettingsScreen )
