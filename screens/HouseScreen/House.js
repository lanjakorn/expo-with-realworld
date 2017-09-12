import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'
import PropTypes from 'prop-types'
import { ga } from 'services'
import { object } from 'utilities'

import { Card } from '@components'
import styles from './HouseStyle'

const House = ( {
  houseCategories,
  isFetchingHouseCategories,
  onPressHouseCategoriesSelect,
} ) =>
  <ScrollView>
    <View>
      {!isFetchingHouseCategories
        ? Object.keys( houseCategories ).map( e =>
          <TouchableOpacity
            key={houseCategories[ e ].title}
            onPress={() =>
              onPressHouseCategoriesSelect( e, houseCategories[ e ].title )}
          >
            <Card margin={0} backgroundColor={'white'}>
              <View style={styles.searchListItemStyle}>
                <Image
                  key={`image-${ houseCategories[ e ].title }`}
                  style={styles.backgroundImage}
                  source={{
                    uri: object.getFirstByKey( {
                      item: houseCategories[ e ].urls,
                      key: 'imgs',
                    } ),
                  }}
                >
                  <View stlye={styles.textSection}>
                    <Text style={styles.text} numberOfLines={1}>
                      {houseCategories[ e ].title}
                    </Text>
                  </View>
                  <View stlye={styles.textDescriptionSection}>
                    <Text style={styles.textDescription}>
                      {houseCategories[ e ].description}
                    </Text>
                  </View>
                </Image>
              </View>
            </Card>
          </TouchableOpacity>
        )
        : <View style={{ flex: 1 }}>
          <Spinner visible={true} />
        </View>}
    </View>
  </ScrollView>

House.propTypes = {
  onPressHouseCategoriesSelect: PropTypes.func.isRequired,
  houseCategories: PropTypes.object.isRequired,
  isFetchingHouseCategories: PropTypes.bool.isRequired,
}

export default House
