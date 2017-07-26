switch ( process.env.NODE_ENV ) {
case 'production':
  module.exports = require( './production' )
case 'development':
default:
  module.exports = require( './development' )
}
