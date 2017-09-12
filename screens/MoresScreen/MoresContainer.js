import { compose, pure, withHandlers } from 'recompose'
import Mores from './Mores'

export default compose(
  withHandlers( {
    onPressMenuSelect: ( { navigation } ) => ( { navigate, title } ) => {
      navigation.navigate( navigate, { category: title } )
    },
  } ),
  pure
)( Mores )
