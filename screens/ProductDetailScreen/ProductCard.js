import React from 'react'
import { connect } from 'react-redux'
import { actions as productAction, selectors } from 'modules/Products'
import { selectors as settingsSelectors } from 'modules/Settings'
import { Colors } from 'constants'
import {
  Image,
  View,
  Text,
  ScrollView,
  Dimensions,
  PixelRatio,
} from 'react-native'
import { Button } from 'react-native-elements'
import PropTypes from 'prop-types'

import Tags from './Tags'
import Pros from './Pros'
import PriceText from './PriceText'
import ProductName from './ProductName'
import ProductDescription from './ProductDescription'
import Slider from './Slider'
import Questions from './Questions'
import Faq from './Faq'

const styles = {
  wrapper: {
    backgroundColor: '#fff',
    // marginTop: 10,
    flexDirection: 'column',
    //height: 170,
    // shadowColor: '#ccc',
    // shadowOffset: { width: 0, height: 0 },
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
    // elevation: 5,
    //padding: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  thumbnailView: {
    paddingLeft: 20,
    paddingRight: 20,
    margin: 15,

    // marginRight: 10,
    // position: 'relative',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbnail: {
    width: 200,
    height: 160,
  },
  detailsView: {
    paddingLeft: 20,
    paddingRight: 20,
  },

  shipping: {
    position: 'absolute',
    bottom: 10,
    borderWidth: 2,
    borderColor: '#DCDCDC',
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 12,
  },
  title: {
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 25,
    marginBottom: 25,
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: Colors.backgroundSection,
  },
  tags: {
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  pros: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 25,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  more: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  faq: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    //justifyContent: 'center',
    marginTop: 25,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: Colors.backgroundSection,
  },
  questions: {
    // marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  shippingText: {
    fontSize: 13,
    color: '#C0C0C0',
  },
  rating: {
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  priceText: {
    marginTop: 5,
  },
}

const renderTags = ( { product: { tags } } ) => {
  return (
    <View style={styles.tags}>
      {tags.map( ( e, k ) =>
        <Tags key={`tags-${ k }`} name={e} style={styles.rating} />
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
        {pros.map( ( e, k ) => <Pros key={`pros-${ k }`} name={e} /> )}
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
          fontSize={12.5}
          buttonStyle={{
            paddingTop: 4,
            paddingBottom: 4,
          }}
          containerViewStyle={{ marginLeft: 0, marginRight: 0 }}
          borderRadius={5}
          title="Contact Us"
          onPress={onPressContactUs}
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
          words={words}
          price={offer.price}
          salePrice={offer.salePrice}
          style={styles.priceText}
        />
      </View>
      {renderTags( props )}
      {renderPros( props )}
      <View style={styles.more}>
        <Button
          backgroundColor={'#fff'}
          fontSize={12.5}
          buttonStyle={{
            paddingTop: 4,
            paddingBottom: 4,
            borderWidth: 1,
            borderRadius: 50,
            borderColor: Colors.tintColor,
          }}
          containerViewStyle={{
            marginLeft: 0,
            marginRight: 6,
          }}
          color={Colors.tintColor}
          borderRadius={5}
          title="Contact"
          onPress={onPressContactUs}
        />
        <Button
          backgroundColor={'#fff'}
          fontSize={12.5}
          buttonStyle={{
            paddingTop: 4,
            paddingBottom: 4,
            borderWidth: 1,
            borderRadius: 50,
            borderColor: Colors.tintColor,
          }}
          containerViewStyle={{
            marginLeft: 0,
            marginRight: 0,
          }}
          color={Colors.tintColor}
          borderRadius={5}
          title="Share"
          onPress={onPressContactUs}
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
          fontSize={12.5}
          buttonStyle={{
            paddingTop: 4,
            paddingBottom: 4,
          }}
          containerViewStyle={{ marginLeft: 0, marginRight: 0 }}
          borderRadius={5}
          title="Ask"
          onPress={onPressContactUs}
        />
      </View>
      <View style={styles.questions}>
        <Questions />
      </View>
    </View>
  )
}

ProductCard.propTypes = {
  name: PropTypes.string,
  offer: PropTypes.object,
  reviewScore: PropTypes.number,
  reviewCount: PropTypes.number,
  image: PropTypes.string,
}

ProductCard.defaultProps = {
  reviewCount: 0,
}

const mapStateToProps = state => ( {
  product: selectors.productSelector( state ),
  words: settingsSelectors.getWordsByLangSelector( state ),
} )

export default connect( mapStateToProps, productAction )( ProductCard )
