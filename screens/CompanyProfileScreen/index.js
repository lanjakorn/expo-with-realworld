import React from 'react'
import PropTypes from 'prop-types'

import { ScrollView } from 'react-native'
import CompanyProfile from './CompanyProfileContainer'
import { HeaderNavigation } from '@components'

const CompanyProfileScreen = ( { navigation } ) =>
  <ScrollView>
    <CompanyProfile navigation={navigation} />
  </ScrollView>

CompanyProfileScreen.navigationOptions = ( { navigation } ) => ( {
  header: <HeaderNavigation navigation={navigation} title="Company Profile" />,
} )

CompanyProfileScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default CompanyProfileScreen
