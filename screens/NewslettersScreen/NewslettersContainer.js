import { compose, pure, mapProps, withHandlers } from 'recompose'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ga } from 'services'
import { withPreloader } from 'hocs'

import {
  actions as newsLettersAction,
  selectors as newsLettersSelectors,
} from 'modules/Newsletters'

import Newsletter from './Newsletter'

const { setCurrentNewsletter } = newsLettersAction
const mapDispatchToProps = dispatch => ( {
  actions: bindActionCreators(
    {
      setCurrentNewsletter,
    },
    dispatch
  ),
} )

const mapStateToProps = state => ( {
  newsletters: newsLettersSelectors.newslettersByIdSelector( state ),
  isFetching: newsLettersSelectors.isFetchingSelector( state ),
} )

export default compose(
  connect( mapStateToProps, mapDispatchToProps ),
  withHandlers( {
    onPressSelectNewsletter: ( { actions, navigation } ) => key => {
      // ga.trackEvent( {
      //   eventCategory: 'products',
      //   eventAction: 'select category of products',
      //   eventLabel: category,
      // } )
      actions.setCurrentNewsletter( key )
      navigation.navigate( 'newsletterDetail', {
        key,
      } )
    },
  } ),
  withPreloader,
  pure
)( Newsletter )
