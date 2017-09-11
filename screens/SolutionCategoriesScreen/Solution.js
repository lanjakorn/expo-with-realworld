import React from 'react'
import { View } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'
import PropTypes from 'prop-types'
import { ga } from 'services'

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
import styles from './SolutionContainerStyle'

const Solution = ( {
  actions,
  faqs,
  isFetching,
  navigation,
  products,
  solutionCategory: { description, title, urls, price: { max, min } },
  words: { maxPrice, minPrice },
} ) => {
  const onPressContactUs = () => {
    navigation.navigate( 'contactUs' )
  }

  const onPressFaq = () => {
    navigation.navigate( 'faq' )
  }

  const onPressSelectProduct = ( id, value ) => {
    ga.trackEvent( {
      eventCategory: 'houses',
      eventAction: 'select product of solution category',
      eventLabel: value,
    } )
    actions.setCurrentProductOfSolutionCategory( id )
    navigation.navigate( 'productDetail', {
      id,
      module: 'solutionCategoris',
    } )
  }

  const faqOnChange = question => {
    ga.trackEvent( {
      eventCategory: 'faqs',
      eventAction: 'select faq of solution category',
      eventLabel: question,
    } )
  }

  return !isFetching
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
}

Solution.propTypes = {
  actions: PropTypes.shape( {
    setCurrentProductOfSolutionCategory: PropTypes.func.isRequired,
    setCurrentSolutions: PropTypes.func.isRequired,
  } ),
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
  faqs: PropTypes.object,
  isFetching: PropTypes.bool.isRequired,
  navigation: PropTypes.object.isRequired,
  products: PropTypes.object,
}

export default Solution
