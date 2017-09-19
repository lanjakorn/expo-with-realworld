import React from 'react'
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import PropTypes from 'prop-types'
import { object } from 'utilities'

import { Card } from '@components'

const { height, width } = Dimensions.get( 'window' )
const styles = StyleSheet.create( {
  searchListItemStyle: {
    alignItems: 'center',
    borderColor: '#686666',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
  },
  backgroundImage: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    resizeMode: 'cover',
    height: height * 0.2 - 20,
    width: width * 1,
  },
  text: {
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textDescription: {
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'black',
    fontSize: 14,
    marginBottom: 5,
    marginLeft: 12,
    marginRight: 12,
    marginTop: 5,
    textAlign: 'center',
  },
  textService: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
} )

const Services = ( { onPressServiceSelect, services } ) =>
  <ScrollView>
    <View>
      {Object.keys( services ).map( e =>
        <TouchableOpacity
          key={e}
          onPress={() => onPressServiceSelect( e, services[ e ].title )}
        >
          <Card margin={0} backgroundColor={'white'}>
            <View style={styles.searchListItemStyle}>
              <Image
                key={`image-${ e }`}
                style={styles.backgroundImage}
                source={{
                  uri: object.getFirstByKey( {
                    item: services[ e ].urls,
                    key: 'imgs',
                  } ),
                }}
              >
                <View stlye={styles.textService}>
                  <Text style={styles.text} numberOfLines={1}>
                    {services[ e ].title}
                  </Text>
                </View>
              </Image>
            </View>
          </Card>
        </TouchableOpacity>
      )}
    </View>
  </ScrollView>

Services.propTypes = {
  onPressServiceSelect: PropTypes.func.isRequired,
  services: PropTypes.object.isRequired,
}

export default Services
