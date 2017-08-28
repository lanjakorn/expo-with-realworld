import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectors as CompanyProfileSelector } from 'modules/CompanyProfile'

import { StyleSheet, View } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'
import { CardContentImage } from '@components'

const styles = StyleSheet.create( {
  container: {
    backgroundColor: '#fff',
    flexDirection: 'column',
    paddingTop: 0,
  },
} )

class CompanyProfileScreen extends Component {
  render() {
    const { companyProfile, isFetching } = this.props
    const { container } = styles
    return (
      <View style={container}>
        {!isFetching
          ? <View
            key={`container-case-${ companyProfile.title }`}
            style={{
              borderBottomWidth: 1,
              borderColor: '#ddd',
            }}
          >
            <CardContentImage
              description={companyProfile.description}
              key={companyProfile.title}
              title={companyProfile.title}
              url={companyProfile.imgUrl}
              limitLine={false}
            />
          </View>
          : <View style={{ flex: 1 }}>
            <Spinner visible={true} />
          </View>}
      </View>
    )
  }
}

const mapStateToProps = state => ( {
  companyProfile: CompanyProfileSelector.companyProfileSelector( state ),
  isFetching: CompanyProfileSelector.isFetchingSelector( state ),
} )

export default connect( mapStateToProps )( CompanyProfileScreen )
