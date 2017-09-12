import React from 'react'
import { View } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'
import PropTypes from 'prop-types'

import {
  ButtonRadiusOutlined,
  CollapsibleFaqs,
  HeaderButtonSection,
  HeaderSection,
  HeaderTitle,
  Slider,
  TextDescriptionCard,
} from '@components'

import Price from './Price'
import Products from './ProductsContainer'
import styles from './SolutionStyle'

const Solution = ( {
  faqs,
  faqOnChange,
  isFetching,
  onPressContactUs,
  onPressFaq,
  onPressSelectProduct,
  products,
  solutionCategory: { description, title, urls, price: { max, min } },
  words: { maxPrice, minPrice },
} ) =>
  !isFetching
    ? <View style={styles.container}>
      <HeaderTitle
        buttonOnPress={onPressContactUs}
        buttontitle={'Contact Us'}
        containerstyle={styles.title}
        textTitle={title}
      />
      <View style={styles.thumbnailView}>
        {<Slider urls={urls} hasVideo />}
      </View>
      <TextDescriptionCard
        containerstyle={styles.detailsView}
        title={description}
      />
      <View style={styles.more}>
        <ButtonRadiusOutlined
          onPress={onPressContactUs}
          style={{ marginRight: 5 }}
          title={'Contact'}
        />
        <ButtonRadiusOutlined onPress={onPressContactUs} title={'Share'} />
      </View>
      <HeaderSection
        containerstyle={styles.products}
        textTitle={'Products'}
      />
      <View>
        <Products
          products={products}
          onPressSelectProduct={onPressSelectProduct}
        />
      </View>
      <HeaderSection containerstyle={styles.price} textTitle={'Price'} />
      <View
        style={{
          padding: 30,
        }}
      >
        <Price
          maxPrice={max}
          maxPriceLable={maxPrice}
          minPrice={min}
          minPriceLable={minPrice}
        />
      </View>
      <HeaderButtonSection
        buttonOnPress={onPressFaq}
        buttontitle={'Faq'}
        containerstyle={styles.faq}
        textTitle={'FAQ'}
      />
      <View style={styles.questions}>
        <CollapsibleFaqs faqs={faqs} onChange={faqOnChange} />
      </View>
    </View>
    : <Spinner visible={true} />

Solution.propTypes = {
  solutionCategory: PropTypes.shape( {
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    urls: PropTypes.object.isRequired,
    price: PropTypes.shape( {
      max: PropTypes.number.isRequired,
      min: PropTypes.number.isRequired,
    } ),
  } ),
  words: PropTypes.shape( {
    maxPrice: PropTypes.string.isRequired,
    minPrice: PropTypes.string.isRequired,
  } ),
  faqOnChange: PropTypes.func.isRequired,
  faqs: PropTypes.object,
  isFetching: PropTypes.bool.isRequired,
  onPressContactUs: PropTypes.func.isRequired,
  onPressFaq: PropTypes.func.isRequired,
  onPressSelectProduct: PropTypes.func.isRequired,
  products: PropTypes.object,
}

export default Solution
