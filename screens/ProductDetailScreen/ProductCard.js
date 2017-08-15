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
    faqs,
    isFetchingFaqs,
    navigation,
    words,
    product: { name, urls, description, offer },
  } = props

  const onPressContactUs = () => {
    navigation.navigate( 'contactUs' )
  }

  const onPressContact = () => {
    navigation.navigate( 'contact' )
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
        <Slider urls={urls} />
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
      {renderTags( props )}
      {renderPros( props )}
      <View style={styles.more}>
        <ButtonRadiusOutlined
          onPress={onPressContact}
          style={{ marginRight: 5 }}
          title={'Contact'}
        />
        <ButtonRadiusOutlined onPress={onPressContactUs} title={'Share'} />
      </View>
      <HeaderButtonSection
        buttonOnPress={onPressContactUs}
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
  faqs: faqsSelectors.faqsByIdSelector( state ),
  isFetchingFaqs: faqsSelectors.isFetchingSelector( state ),
  product: productsSelectors.productSelector( state ),
  words: settingsSelectors.getWordsByLangSelector( state ),
} )

export default connect( mapStateToProps, combineAction() )( ProductCard )
