import { string } from 'utilities'

const minimumMsg = ( field, len ) =>
  `Minimum ${ field } length of ${ len } is required.`

const validationRules = {
  titleQuestion: [
    [ string.isNotEmpty, 'Title Question should not be empty.' ],
    [ string.isLengthGreaterThan( 8 ), minimumMsg( 'Title Question', 8 ) ],
  ],
  question: [
    [ string.isNotEmpty, 'Question should not be empty.' ],
    [ string.isLengthGreaterThan( 8 ), minimumMsg( 'Question', 8 ) ],
  ],
}

export default validationRules
