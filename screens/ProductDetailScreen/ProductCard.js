import React from 'react'
import { connect } from 'react-redux'
import {
  actions as faqsActions,
  selectors as faqsSelectors,
} from 'modules/Faqs'
import {
  actions as productsActions,
  selectors as productsSelectors,
} from 'modules/Products'
import { selectors as settingsSelectors } from 'modules/Settings'
import PropTypes from 'prop-types'

import { Dimensions, View, Text, TouchableOpacity } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'
import {
  ButtonRadiusOutlined,
  CollapsibleFaqs,
  HeaderButtonSection,
  HeaderTitle,
  Slider,
  TextDescriptionCard,
} from '@components'

import Tag from './Tag'
import Pro from './Pro'
import PriceText from './PriceText'
import styles from './ProductCardStyle'

import { Colors } from 'constants'
const { width } = Dimensions.get( 'window' )

const renderTags = tags => {
  return (
    <View style={styles.tags}>
      {tags.map( ( e, k ) =>
        <Tag key={`tags-${ k }`} name={e} style={styles.rating} />
      )}
    </View>
  )
}

const renderPros = ( pros, words ) => {
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

const renderFeatures = ( pros, navigation ) => {
  console.log( navigation )
  const onPressFeature = () => {
    navigation.navigate( 'feature' )
  }

  return (
    <View style={styles.pros}>
      <Text style={{ marginBottom: 15, fontSize: 16, fontWeight: '600' }}>
        {'Feature'}
      </Text>
      <View>
        {Array( 1, 2 ).map( ( e, k ) =>
          <View
            key={k}
            style={{
              flex: 1,
              flexDirection: 'column',
            }}
          >
            <View
              // key={k}
              style={{
                flex: 1,
                flexDirection: 'row',
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  marginRight: 12,
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                  }}
                >
                  {'•'}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  width: width * 0.8 + 20,
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    lineHeight: 24,
                    // color: Colors.textDescription,
                  }}
                >
                  {`Feature ${ k }`}
                </Text>
              </View>
            </View>
            <View
              // key={k}
              style={{
                flex: 1,
                flexDirection: 'row',
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  marginRight: 20,
                }}
              />
              <View
                style={{
                  flex: 5,
                  justifyContent: 'flex-start',
                }}
              >
                <Text
                  multiline={true}
                  numberOfLines={2}
                  style={{
                    fontSize: 15,
                    lineHeight: 24,
                    color: Colors.textDescription,
                  }}
                >
                  {
                    'Improve your coloring skills with these simple, step-by-step instructions for techniques using colored pencils. Intended for beginning artists and coloring book enthusiasts, this guide is ideal for those without formal training but with some experience of coloring with pencils. A wealth of suggestions and exercises will show you how to take your skills to the next level'
                  }
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                  marginRight: 10,
                }}
              >
                <TouchableOpacity
                  onPress={onPressFeature}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      lineHeight: 24,
                      color: '#0066c0',
                    }}
                  >
                    {'more'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </View>
      <View />
    </View>
  )
}

// TODO: duplicate logic checking : Remove all duplicates but keep only one
const ProductCard = props => {
  const {
    isFetchingFaqs,
    navigation,
    words,
    productOfProductCategory,
    productOfSolutionCategory,
    faqsOfProductFromProductCategory,
    faqsOfProductFromSolutionCategory,
  } = props

  const { name, urls, description, offer, tags, pros, hasMPF } =
    navigation.state.params.module === 'productCategories'
      ? productOfProductCategory
      : productOfSolutionCategory

  const faqs =
    navigation.state.params.module === 'productCategories'
      ? faqsOfProductFromProductCategory
      : faqsOfProductFromSolutionCategory

  const onPressContactUs = () => {
    navigation.navigate( 'contactUs' )
  }

  const onPressContact = () => {
    navigation.navigate( 'contact', {
      module: navigation.state.params.module,
    } )
  }

  const onPressFaq = () => {
    navigation.navigate( 'faq' )
  }

  return (
    <View style={styles.container}>
      <HeaderTitle
        buttonOnPress={onPressContactUs}
        buttontitle={'Contact Us'}
        containerstyle={styles.title}
        textTitle={name}
      />
      <View style={styles.thumbnailView}>
        <Slider urls={urls} hasVideo />
      </View>
      <TextDescriptionCard
        containerstyle={styles.detailsView}
        title={description}
      />
      {!hasMPF
        ? <View style={styles.price}>
          <PriceText
            price={offer.price}
            salePrice={offer.salePrice}
            style={styles.priceText}
            words={words}
          />
        </View>
        : <View />}
      {renderTags( tags )}
      {renderPros( pros, words )}
      {hasMPF ? renderFeatures( pros, navigation ) : <View />}
      <View style={styles.more}>
        <ButtonRadiusOutlined
          onPress={onPressContact}
          style={{ marginRight: 5 }}
          title={'Contact'}
        />
        <ButtonRadiusOutlined onPress={onPressContactUs} title={'Share'} />
      </View>
      <HeaderButtonSection
        buttonOnPress={onPressFaq}
        buttontitle={'Faq'}
        containerstyle={styles.faq}
        textTitle={'FAQ'}
      />
      <View style={styles.questions}>
        {isFetchingFaqs
          ? <Spinner visible={true} />
          : <CollapsibleFaqs faqs={faqs} />}
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

const combineAction = () => ( {
  ...faqsActions,
  ...productsActions,
} )

const mapStateToProps = state => ( {
  faqsOfProductFromProductCategory: productsSelectors.faqOfProductFromProductCategorySelector(
    state
  ),
  faqsOfProductFromSolutionCategory: productsSelectors.faqOfProductFromSolutionCategorySelector(
    state
  ),
  isFetchingFaqs: faqsSelectors.isFetchingSelector( state ),
  productOfProductCategory: productsSelectors.productOfProductCategorySelector(
    state
  ),
  productOfSolutionCategory: productsSelectors.productOfSolutionCategorySelector(
    state
  ),
  words: settingsSelectors.getWordsByLangSelector( state ),
} )

export default connect( mapStateToProps, combineAction() )( ProductCard )
