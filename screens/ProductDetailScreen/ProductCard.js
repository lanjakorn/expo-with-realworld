import React from 'react'
import { connect } from 'react-redux'
import { actions as productAction, selectors } from 'modules/Products'
import { selectors as settingsSelectors } from 'modules/Settings'
import PropTypes from 'prop-types'

import { Colors } from 'constants'
import { Image, View, Text } from 'react-native'
import {
  ButtonRadiusOutlined,
  HeaderTitle,
  HeaderSection,
  TextDescriptionCard,
} from '@components'

import Tag from './Tag'
import Pro from './Pro'
import PriceText from './PriceText'
import Slider from './Slider'
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
    navigation,
    words,
    product: { name, urls, title, description, offer, tags, pros, faqs },
  } = props

  const onPressContactUs = () => {
    navigation.navigate( 'contactUs' )
  }

  return (
    <View style={styles.wrapper}>
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
          onPress={onPressContactUs}
          style={{ marginRight: 5 }}
          title={'Contact'}
        />
        <ButtonRadiusOutlined onPress={onPressContactUs} title={'Share'} />
      </View>
      <HeaderSection
        buttonOnPress={onPressContactUs}
        buttontitle={'Faq'}
        containerstyle={styles.faq}
        textTitle={'FAQ'}
      />
      <View style={styles.questions}>
        <Questions questions={faqs} />
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
