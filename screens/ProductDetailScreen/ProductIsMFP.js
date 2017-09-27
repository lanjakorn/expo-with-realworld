import React from 'react'
import { View, Text } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'
import PropTypes from 'prop-types'

import {
  ButtonRadiusOutlined,
  CollapsibleFaqs,
  HeaderTitle,
  Slider,
  TextDescriptionCard,
} from '@components'

import Feature from './Feature'
import Pro from './Pro'
import Tag from './Tag'
import styles from './ProductStyle'

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

const renderFeatures = ( features, onPressFeature ) =>
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

const ProductCard = props => {
  const {
    faqOnChange,
    faqs,
    isFetchingFaqs,
    onPressContact,
    onPressContactUs,
    onPressFeature,
    words,
    product: { name, description, features, pros, tags, urls },
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
      {renderTags( tags )}
      {renderPros( pros, words )}
      {renderFeatures( features, onPressFeature )}
      <View style={styles.more}>
        <ButtonRadiusOutlined
          onPress={onPressContact}
          style={{ marginRight: 5 }}
          title={'Contact'}
        />
        <ButtonRadiusOutlined onPress={onPressContactUs} title={'Share'} />
      </View>
      {<View style={styles.questions} />}
      {isFetchingFaqs
        ? <Spinner visible={true} />
        : <CollapsibleFaqs faqs={faqs} onChange={faqOnChange} />}
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
  onPressFeature: PropTypes.func.isRequired,
  words: PropTypes.object.isRequired,
}

export default ProductCard
