import { compose, lifecycle, pure, withHandlers, withState } from 'recompose'
import values from 'lodash/values'
import { ListView } from 'react-native'

import Products from './Products'

export default compose(
  withState( 'dataSourceProducts', 'setDataSourceProducts', [] ),
  withHandlers( {
    setDataSource: ( { setDataSourceProducts } ) => data => {
      return setDataSourceProducts( data )
    },
  } ),
  lifecycle( {
    componentWillMount() {
      const { products, setDataSource } = this.props
      const ds = new ListView.DataSource( {
        rowHasChanged: ( r1, r2 ) => r1 !== r2,
      } )
      setDataSource( ds.cloneWithRows( values( products ) ) )
    },
  } ),
  pure
)( Products )
