import React from 'react'
import { connect } from 'react-redux'
import { actions as productAction, selectors } from 'modules/Products'
import { selectors as settingsSelectors } from 'modules/Settings'
import { Colors } from 'constants'
import { Image, View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import PropTypes from 'prop-types'

import Tag from './Tag'
import Pro from './Pro'
import PriceText from './PriceText'
import ProductName from './ProductName'
import ProductDescription from './ProductDescription'
import Slider from './Slider'
import Questions from './Questions'
import Faq from './Faq'

const styles = {
  wrapper: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    paddingBottom: 20,
    paddingTop: 20,
  },
  thumbnailView: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
    marginTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
  },
  thumbnail: {
    height: 160,
    width: 200,
  },
  detailsView: {
    marginTop: 35,
    paddingLeft: 20,
    paddingRight: 20,
  },
  shipping: {
    borderColor: '#DCDCDC',
    borderRadius: 12,
    borderWidth: 2,
    bottom: 10,
    paddingBottom: 5,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 5,
    position: 'absolute',
  },
  title: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  price: {
    backgroundColor: Colors.backgroundSection,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 25,
    marginTop: 25,
    paddingBottom: 30,
    paddingTop: 30,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    paddingLeft: 20,
    paddingRight: 20,
  },
  pros: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginTop: 25,
    paddingLeft: 20,
    paddingRight: 20,
  },
  more: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 25,
    paddingLeft: 20,
    paddingRight: 20,
  },
  faq: {
    alignItems: 'center',
    backgroundColor: Colors.backgroundSection,
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: 'space-between',
    marginTop: 25,
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 30,
  },
  questions: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  shippingText: {
    color: '#C0C0C0',
    fontSize: 13,
  },
  priceText: {
    marginTop: 5,
  },
}

const renderTags = ( { product: { tags } } ) => {
  return (
    <View style={styles.tags}>
      {tags.map( ( e, k ) =>
        <Tag key={`tags-${ k }`} name={e} style={styles.rating} />
      )}
    </View>
  )
}

const renderPros = ( { product: { pros }, words } ) => {
  return (
    <View style={styles.pros}>
      <Text style={{ marginBottom: 15, fontSize: 16, fontWeight: '600' }}>
        {words.productPros}
      </Text>
      <View>
        {pros.map( ( e, k ) => <Pro key={`pros-${ k }`} name={e} /> )}
      </View>
    </View>
  )
}

const ProductCard = props => {
  const {
    navigation,
    words,
    product: { name, urls, title, description, offer, tags, pros },
  } = props

  const onPressContactUs = () => {
    navigation.navigate( 'contactUs' )
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.title}>
        <ProductName name={name} />
        <Button
          backgroundColor={Colors.tintColor}
          borderRadius={5}
          fontSize={12.5}
          onPress={onPressContactUs}
          title="Contact Us"
          buttonStyle={{
            paddingBottom: 4,
            paddingTop: 4,
          }}
          containerViewStyle={{
            marginLeft: 0,
            marginRight: 0,
          }}
        />
      </View>
      <View style={styles.thumbnailView}>
        <Slider urls={urls} />
      </View>
      <View style={styles.detailsView}>
        <ProductDescription name={description} />
      </View>
      <View style={styles.price}>
        <PriceText
          price={offer.price}
          salePrice={offer.salePrice}
          style={styles.priceText}
          words={words}
        />
      </View>
      {renderTags( props )}
      {renderPros( props )}
      <View style={styles.more}>
        <Button
          backgroundColor={'#fff'}
          borderRadius={5}
          color={Colors.tintColor}
          fontSize={12.5}
          onPress={onPressContactUs}
          title="Contact"
          buttonStyle={{
            borderColor: Colors.tintColor,
            borderRadius: 50,
            borderWidth: 1,
            paddingBottom: 4,
            paddingTop: 4,
          }}
          containerViewStyle={{
            marginLeft: 0,
            marginRight: 6,
          }}
        />
        <Button
          color={Colors.tintColor}
          backgroundColor={'#fff'}
          borderRadius={5}
          fontSize={12.5}
          onPress={onPressContactUs}
          title="Share"
          buttonStyle={{
            borderColor: Colors.tintColor,
            borderRadius: 50,
            borderWidth: 1,
            paddingBottom: 4,
            paddingTop: 4,
          }}
          containerViewStyle={{
            marginLeft: 0,
            marginRight: 0,
          }}
        />
      </View>
      <View style={styles.faq}>
        <Text
          style={{ color: Colors.tintColor, fontSize: 16, fontWeight: '400' }}
        >
          {'FAQ'}
        </Text>
        <Button
          backgroundColor={Colors.tintColor}
          borderRadius={5}
          fontSize={12.5}
          onPress={onPressContactUs}
          title="Ask"
          buttonStyle={{
            paddingBottom: 4,
            paddingTop: 4,
          }}
          containerViewStyle={{ marginLeft: 0, marginRight: 0 }}
        />
      </View>
      <View style={styles.questions}>
        <Questions />
      </View>
    </View>
  )
}

ProductCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  offer: PropTypes.object,
  reviewCount: PropTypes.number,
  reviewScore: PropTypes.number,
}

ProductCard.defaultProps = {
  reviewCount: 0,
}

const mapStateToProps = state => ( {
  product: selectors.productSelector( state ),
  words: settingsSelectors.getWordsByLangSelector( state ),
} )

export default connect( mapStateToProps, productAction )( ProductCard )
