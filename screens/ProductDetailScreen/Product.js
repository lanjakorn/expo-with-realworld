import React from 'react'
import { View, Text } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'
import PropTypes from 'prop-types'
import { ga } from 'services'
import { nav } from 'utilities'

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
import styles from './ProductStyle'
import Tag from './Tag'

const renderTags = tags =>
  <View style={styles.tags}>
    {tags.map( ( e, k ) =>
      <Tag key={`tags-${ k }`} name={e} style={styles.rating} />
    )}
  </View>

const renderPros = ( pros, words ) =>
  <View style={styles.pros}>
    <Text style={{ marginBottom: 15, fontSize: 16, fontWeight: '600' }}>
      {words.productPros}
    </Text>
    <View>
      {pros.map( ( e, k ) => <Pro key={`pros-${ k }`} name={e} /> )}
    </View>
  </View>

const renderFeatures = ( features, navigation ) => {
  const onPressFeature = index => {
    navigation.navigate( 'feature', {
      index,
      module: nav.getNavigationParam( navigation, 'module' ),
    } )
  }

  return (
    <View style={styles.pros}>
      <Text style={{ marginBottom: 15, fontSize: 16, fontWeight: '600' }}>
        {'Feature'}
      </Text>
      <View>
        {features.map( ( { title, description }, k ) =>
          <Feature
            description={description}
            key={`feature-${ k }-${ title }`}
            index={k}
            onPressFeature={onPressFeature}
            title={title}
          />
        )}
      </View>
      <View />
    </View>
  )
}

const faqOnChange = question => {
  ga.trackEvent( {
    eventCategory: 'faqs',
    eventAction: 'select faq of product',
    eventLabel: question,
  } )
}

const ProductCard = props => {
  const {
    faqs,
    isFetchingFaqs,
    navigation,
    words,
    product: { name, description, features, hasMPF, offer, pros, tags, urls },
  } = props

  const onPressContactUs = () => {
    navigation.navigate( 'contactUs' )
  }

  const onPressContact = () => {
    navigation.navigate( 'contact', {
      module: nav.getNavigationParam( navigation, 'module' ),
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
            style={styles.priceText}
            words={words}
          />
        </View>
        : <View />}
      {renderTags( tags )}
      {renderPros( pros, words )}
      {hasMPF ? renderFeatures( features, navigation ) : <View />}
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
          : <CollapsibleFaqs faqs={faqs} onChange={faqOnChange} />}
      </View>
    </View>
  )
}

ProductCard.propTypes = {
  product: PropTypes.shape( {
    description: PropTypes.string,
    features: PropTypes.array,
    hasMPF: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    offer: PropTypes.object.isRequired,
    pros: PropTypes.array,
    tags: PropTypes.array,
    urls: PropTypes.object.isRequired,
  } ),
  faqs: PropTypes.object,
  isFetchingFaqs: PropTypes.bool.isRequired,
  navigation: PropTypes.object.isRequired,
  words: PropTypes.object.isRequired,
}

export default ProductCard
