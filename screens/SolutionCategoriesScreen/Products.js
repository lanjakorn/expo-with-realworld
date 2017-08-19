import React, { Component } from 'react'
import {
  Image,
  ListView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

const styles = StyleSheet.create( {
  productsContainer: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
  productContainer: { padding: 5, width: '50%', paddingBottom: 25 },
  productImage: {
    alignSelf: 'center',
    height: 140,
    marginBottom: 10,
    width: 140,
  },
  productName: { fontWeight: 'bold' },
} )

class Faq extends Component {
  state = {
    products: [
      {
        name: 'MP C6004SP1',
        image:
          'https://www.bhphotovideo.com/images/images500x500/ricoh_407587_sp_213nw_laser_printer_1109659.jpg',
      },
      {
        name: 'MP C6004SP2',
        image:
          'https://www.bhphotovideo.com/images/images500x500/ricoh_407587_sp_213nw_laser_printer_1109659.jpg',
      },
      {
        name: 'MP C8004SP1',
        image:
          'https://www.bhphotovideo.com/images/images500x500/ricoh_407587_sp_213nw_laser_printer_1109659.jpg',
      },
      {
        name: 'MP C9004SP1',
        image:
          'https://www.bhphotovideo.com/images/images500x500/ricoh_407587_sp_213nw_laser_printer_1109659.jpg',
      },
    ],
  }

  componentWillMount() {
    const ds = new ListView.DataSource( {
      rowHasChanged: ( r1, r2 ) => r1 !== r2,
    } )

    this.dataSource = ds.cloneWithRows( this.state.products )
  }

  renderProducts = product => {
    const {
      productContainer,
      imageContainer,
      productImage,
      productName,
    } = styles
    const { name, image } = product
    return (
      <View style={productContainer}>
        <TouchableOpacity
          key={name}
          onPress={() => this.props.onPressSelectProduct( name )}
        >
          <View style={imageContainer}>
            <Image
              style={productImage}
              source={{
                uri: image,
              }}
            />
          </View>
          <Text style={productName}>
            {name}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    return (
      <ListView
        contentContainerStyle={styles.productsContainer}
        dataSource={this.dataSource}
        renderRow={this.renderProducts}
      />
    )
  }
}

export default Faq
