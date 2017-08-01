import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions as CategoriesAction } from 'modules/Categories'

import {
  Text,
  TextInput,
  Dimensions,
  View,
  ScrollView,
  StyleSheet,
} from 'react-native'
import CategoriesDetail from './CategoriesDetail'
import { Colors } from 'constants'
import storyData from 'mocks/products.json'
import { FontAwesome } from '@expo/vector-icons'

class CategoriesList extends Component {
  constructor( props ) {
    super( props )
  }

  async componentWillMount() {
    //axios.get("http://api.duckduckgo.com/?q=googl&format=json")
    //	.then(response => this.setState({ stories: response.data}));
    await this.props.initCategoriesScreen()
  }

  getStoryData( story ) {
    return (
      <CategoriesDetail
        key={story.title}
        StoryImage={story.urlToImage}
        StoryAbstractURL={story.url}
        StoryHeading={story.title}
      />
    )
  }

  renderStories() {
    return storyData.map( this.getStoryData )
  }

  render() {
    return (
      <ScrollView>
        {this.renderStories()}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create( {
  viewStyle: {
    backgroundColor: '#eeeeee',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20,
  },
} )

const mapStateToProps = state => ( {
  ...state,
} )

// export default StoriesList
export default connect( mapStateToProps, CategoriesAction )( CategoriesList )
