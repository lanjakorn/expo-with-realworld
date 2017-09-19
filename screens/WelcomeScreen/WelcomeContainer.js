import { compose, lifecycle, pure } from 'recompose'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { actions as homeActions } from 'modules/Home'
import Welcome from './Welcome'

const { initHomeScreen } = homeActions
const mapDispatchToProps = dispatch => ( {
  actions: bindActionCreators(
    {
      initHomeScreen,
    },
    dispatch
  ),
} )

const mapStateToProps = state => ( {
  isFetching: state.home.isFetching,
} )

export default compose(
  connect( mapStateToProps, mapDispatchToProps ),
  lifecycle( {
    componentWillMount() {
      this.props.actions.initHomeScreen()
    },
  } ),
  pure
)( Welcome )
