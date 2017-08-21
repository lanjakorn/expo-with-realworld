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

import { View, Text } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'
import {
  ButtonRadiusOutlined,
  HeaderButtonSection,
  HeaderTitle,
  Slider,
  TextDescriptionCard,
} from '@components'

import Tag from './Tag'
import Pro from './Pro'
import PriceText from './PriceText'
import Questions from './Questions'
import styles from './ProductCardStyle'

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

// TODO: duplicate logic checking : Remove all duplicates but keep only one
const ProductCard = props => {
  const {
    isFetchingFaqs,
    navigation,
    words,
    productOfProductCategory,
    productOfSolutionCategory,
    faqsOfProductfromProductCategory,
    faqsOfProductfromSolutionCategory,
  } = props

  const { name, urls, description, offer, tags, pros } =
    navigation.state.params.module === 'productCategories'
      ? productOfProductCategory
      : productOfSolutionCategory

  const faqs =
    navigation.state.params.module === 'productCategories'
      ? faqsOfProductfromProductCategory
      : faqsOfProductfromSolutionCategory

  const onPressContactUs = () => {
    navigation.navigate( 'contactUs' )
  }

  const onPressContact = () => {
    navigation.navigate( 'contact' )
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
      <View style={styles.price}>
        <PriceText
          price={offer.price}
          salePrice={offer.salePrice}
          style={styles.priceText}
          words={words}
        />
      </View>
      {renderTags( tags )}
      {renderPros( pros, words )}
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
          : <Questions questions={faqs} />}
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
  faqsOfProductfromProductCategory: productsSelectors.faqOfProductFromProductCategorySelector(
    state
  ),
  faqsOfProductfromSolutionCategory: productsSelectors.faqOfProductFromSolutionCategorySelector(
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
