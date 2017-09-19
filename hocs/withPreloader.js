import { branch, renderComponent } from 'recompose'

import { PreLoader } from '@components'

export default branch( props => props.isFetching, renderComponent( PreLoader ) )
