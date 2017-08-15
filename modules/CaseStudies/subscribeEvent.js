import { Record } from 'immutable'
import FirebaseList from './firebaseList'
import { caseStudies, getCaseStudies } from './actions'

const Task = new Record( {
  completed: false,
  key: null,
  title: null,
} )

export const subscribeEvent = new FirebaseList(
  {
    onSuccess: getCaseStudies,
    onFailure: caseStudies.failure,
  },
  Task
)
