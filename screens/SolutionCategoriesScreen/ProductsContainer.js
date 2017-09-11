import { ListView } from 'react-native'
import { compose, lifecycle, pure, withHandlers, withState } from 'recompose'
import values from 'lodash/values'

import Products from './Products'

export default compose(
  withState( 'dataSourceProducts', 'setDataSourceProducts', [] ),
  withHandlers( {
    setDataSource: ( { setDataSourceProducts } ) => data =>
      setDataSourceProducts( data ),
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
