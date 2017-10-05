import React from 'react'
import { Dimensions, Image, Text, View } from 'react-native'
import { string } from 'utilities'

import SearchHighlight from './SearchHighlight'
import SearchHighlightArray from './SearchHighlightArray'

import styles from './SearchStyle'

const { hasCapitalize, hasSpaceCapitalize } = string

const Hit = ( hit, sectionId, rowId ) => {
  const header = hit.isFirst && (
    <Text
      style={{
        marginLeft: 10,
        marginTop: 5,
        fontWeight: '600',
        color: 'black',
      }}
    >
      {hasCapitalize( hasSpaceCapitalize( hit.refKey ) )}
    </Text>
  )
  switch ( hit.refKey ) {
  case 'products':
    return (
      <View>
        <View style={styles.item} key={`header-${ rowId }`}>
          {header}
        </View>
        <View style={styles.item} key={rowId}>
          <View style={{ margin: 10 }}>
            <Image
              style={{
                height: 60,
                width: 60,
                // borderRadius: 30,
              }}
              source={{ uri: hit.urls.imgs[ 0 ] }}
            />
          </View>
          <View style={styles.itemContent}>
            <SearchHighlight
              attributeName="name"
              core={true}
              hit={hit}
              highlightProperty="_highlightResult"
            />
            <SearchHighlightArray
              attributeName="description"
              hit={hit}
              highlightProperty="_highlightResult"
              textStyle={{ width: Dimensions.get( 'window' ).width * 0.7 - 10 }}
            />
            <SearchHighlight
              attributeName="categories"
              hit={hit}
              highlightProperty="_highlightResult"
            />
          </View>
        </View>
      </View>
    )

  case 'faqs':
    return (
      <View>
        <View style={styles.item} key={`header-${ rowId }`}>
          {header}
        </View>
        <View style={styles.item} key={rowId}>
          <View style={styles.itemContent}>
            <SearchHighlight
              attributeName="question"
              core={true}
              hit={hit}
              highlightProperty="_highlightResult"
            />
            <SearchHighlight
              attributeName="answer"
              hit={hit}
              highlightProperty="_highlightResult"
            />
            <SearchHighlight
              attributeName="productCategories"
              hit={hit}
              highlightProperty="_highlightResult"
            />
            <SearchHighlight
              attributeName="titleQuestion"
              hit={hit}
              highlightProperty="_highlightResult"
            />
          </View>
        </View>
      </View>
    )

  case 'contacts':
    return (
      <View>
        <View style={styles.item} key={`header-${ rowId }`}>
          {header}
        </View>
        <View style={styles.item} key={rowId}>
          <View style={{ margin: 10 }}>
            <Image
              style={{
                height: 60,
                width: 60,
                borderRadius: 30,
              }}
              source={{ uri: hit.imgUrl }}
            />
          </View>
          <View style={styles.itemContent}>
            <SearchHighlight
              attributeName="name"
              core={true}
              hit={hit}
              highlightProperty="_highlightResult"
            />
            <SearchHighlight
              attributeName="email"
              core={true}
              hit={hit}
              highlightProperty="_highlightResult"
            />
            <SearchHighlight
              attributeName="department"
              hit={hit}
              highlightProperty="_highlightResult"
            />
            <SearchHighlight
              attributeName="postion"
              hit={hit}
              highlightProperty="_highlightResult"
            />
            <SearchHighlight
              attributeName="tel"
              hit={hit}
              highlightProperty="_highlightResult"
            />
          </View>
        </View>
      </View>
    )

  case 'caseStudies':
  case 'houseCategories':
  case 'services':
  case 'solutions':
  case 'solutionCategories':
    return (
      <View>
        <View style={styles.item} key={`header-${ rowId }`}>
          {header}
        </View>
        <View style={styles.item} key={rowId}>
          <View style={styles.itemContent}>
            <SearchHighlight
              attributeName="title"
              core={true}
              hit={hit}
              highlightProperty="_highlightResult"
            />
            <SearchHighlight
              attributeName="description"
              hit={hit}
              highlightProperty="_highlightResult"
            />
          </View>
        </View>
      </View>
    )

  default:
    return <View />
  }
}

export default Hit
