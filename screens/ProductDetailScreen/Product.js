import React from 'react'
import { View, Text } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'
import PropTypes from 'prop-types'

import {
  ButtonRadiusOutlined,
  CollapsibleFaqs,
  HeaderButtonSection,
  HeaderTitle,
  Slider,
  TextDescriptionCard,
} from '@components'

import Feature from './Feature'
import PriceText from './PriceText'
import Pro from './Pro'
import Tag from './Tag'
import styles from './ProductStyle'

const renderTags = tags => (
  <View style={styles.tags}>
    {tags.map( ( e, k ) => (
      <Tag key={`tags-${ k }`} name={e} style={styles.rating} />
    ) )}
  </View>
)

const renderPros = ( pros, words ) => (
  <View style={styles.pros}>
    <Text style={{ marginBottom: 15, fontSize: 16, fontWeight: '600' }}>
      {words.productPros}
    </Text>
    <View>{pros.map( ( e, k ) => <Pro key={`pros-${ k }`} name={e} /> )}</View>
  </View>
)

const renderFeatures = ( features, onPressFeature ) => (
  <View style={styles.pros}>
    <Text style={{ marginBottom: 15, fontSize: 16, fontWeight: '600' }}>
      {'Feature'}
    </Text>
    <View>
      {features.map( ( { title, description }, k ) => (
        <Feature
          description={description}
          key={`feature-${ k }-${ title }`}
          index={k}
          onPressFeature={onPressFeature}
          title={title}
        />
      ) )}
    </View>
    <View />
  </View>
)

//TODO: strategy render component check by has MFP
const ProductCard = props => {
  const {
    faqOnChange,
    faqs,
    isFetchingFaqs,
    onPressContact,
    onPressContactUs,
    onPressFaq,
    onPressFeature,
    words,
    product: { name, description, features, isMFP, offer, pros, tags, urls },
  } = props

  return (
    <View style={styles.container}>
      <HeaderTitle
        buttonOnPress={onPressContactUs}
        buttonTitle={'Contact Us'}
        containerStyle={styles.title}
        textTitle={name}
      />
      <View style={styles.thumbnailView}>
        <Slider urls={urls} hasVideo />
      </View>
      <TextDescriptionCard
        containerstyle={styles.detailsView}
        title={description}
      />
      {!isMFP ? (
        <View style={styles.price}>
          <PriceText
            price={offer.price}
            style={styles.priceText}
            words={words}
          />
        </View>
      ) : (
        <View />
      )}
      {tags && renderTags( tags )}
      {pros && renderPros( pros, words )}
      {!isMFP ? <View /> : features && renderFeatures( features, onPressFeature )}
      <View style={styles.more}>
        <ButtonRadiusOutlined
          onPress={onPressContact}
          style={{ marginRight: 5 }}
          title={'Contact'}
        />
        <ButtonRadiusOutlined onPress={onPressContactUs} title={'Share'} />
      </View>
      {!isMFP ? (
        <HeaderButtonSection
          buttonOnPress={onPressFaq}
          buttontitle={'Faq'}
          containerstyle={styles.faq}
          textTitle={'FAQ'}
        />
      ) : (
        <View style={styles.questions}>
          {isFetchingFaqs ? (
            <Spinner visible={true} />
          ) : (
            <CollapsibleFaqs faqs={faqs} onChange={faqOnChange} />
          )}
        </View>
      )}
    </View>
  )
}

ProductCard.propTypes = {
  product: PropTypes.shape( {
    description: PropTypes.string,
    features: PropTypes.array,
    isMFP: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    offer: PropTypes.object.isRequired,
    pros: PropTypes.array,
    tags: PropTypes.array,
    urls: PropTypes.object.isRequired,
  } ),
  faqOnChange: PropTypes.func.isRequired,
  faqs: PropTypes.object,
  isFetchingFaqs: PropTypes.bool.isRequired,
  navigation: PropTypes.object.isRequired,
  onPressContact: PropTypes.func.isRequired,
  onPressContactUs: PropTypes.func.isRequired,
  onPressFaq: PropTypes.func.isRequired,
  onPressFeature: PropTypes.func.isRequired,
  words: PropTypes.object.isRequired,
}

export default ProductCard
