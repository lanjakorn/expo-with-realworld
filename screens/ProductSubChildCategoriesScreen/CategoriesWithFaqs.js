import React from 'react'
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native'
import PropTypes from 'prop-types'
import { Colors } from 'constants'

import { CollapsibleFaqs, HeaderButtonSection } from '@components'

import Category from './Category'

const styles = StyleSheet.create( {
  container: {
    // marginTop: 10,
  },
  categories: {
    backgroundColor: '#fff',
  },
  faq: {
    backgroundColor: '#fff',
  },
  faqHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 30,
    backgroundColor: Colors.backgroundSection,
  },
  questions: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
} )

const Categories = ( {
  categories,
  faqOnChange,
  faqs,
  onPressFaq,
  onPressSelectProduct,
} ) => {
  const renderCategories = () =>
    categories.map( ( { image, name } ) =>
      <TouchableOpacity key={name} onPress={() => onPressSelectProduct( name )}>
        <Category key={name} StoryImage={image} StoryHeading={name} />
      </TouchableOpacity>
    )

  return faqs && Object.keys( faqs ).length > 0
    ? <View style={{ flexDirection: 'column' }}>
      <View style={styles.categories}>
        <ScrollView>
          <View style={styles.container}>
            {renderCategories()}
          </View>
          <HeaderButtonSection
            buttonOnPress={onPressFaq}
            buttontitle={'Faq'}
            containerstyle={styles.faqHeader}
            textTitle={'FAQ'}
          />
          <View style={styles.questions}>
            <ScrollView>
              <CollapsibleFaqs faqs={faqs} onChange={faqOnChange} />
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </View>
    : <ScrollView>
      <View style={styles.container}>
        {renderCategories()}
      </View>
    </ScrollView>
}

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
  faqOnChange: PropTypes.func.isRequired,
  faqs: PropTypes.object,
  onPressFaq: PropTypes.func.isRequired,
  onPressSelectProduct: PropTypes.func.isRequired,
}

export default Categories
