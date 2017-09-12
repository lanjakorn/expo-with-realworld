import { compose, pure, withHandlers } from 'recompose'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ga } from 'services'

import {
  actions as houseCategoriesActions,
  selectors as houseCategoriesSelectors,
} from 'modules/HouseCategories'

import House from './House'

const { setCurrentHouseCategory } = houseCategoriesActions
const mapDispatchToProps = dispatch => ( {
  actions: bindActionCreators(
    {
      setCurrentHouseCategory,
    },
    dispatch
  ),
} )

const mapStateToProps = state => ( {
  houseCategories: houseCategoriesSelectors.houseCategoriesByIdSelector( state ),
  isFetchingHouseCategories: houseCategoriesSelectors.isFetchingSelector( state ),
} )

export default compose(
  connect( mapStateToProps, mapDispatchToProps ),
  withHandlers( {
    onPressHouseCategoriesSelect: ( { actions, navigation } ) => ( id, value ) => {
      ga.trackEvent( {
        eventCategory: 'houses',
        eventAction: 'select house category of house',
        eventLabel: value,
      } )
      actions.setCurrentHouseCategory( id )
      navigation.navigate( 'houseCategories', {
        category: value,
      } )
    },
  } ),
  pure
)( House )
