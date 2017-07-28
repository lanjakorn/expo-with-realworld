switch ( process.env.NODE_ENV ) {
case 'production':
  module.exports = require( './configureStore.prod' )
case 'development':
default:
  module.exports = require( './configureStore.dev' )
}
