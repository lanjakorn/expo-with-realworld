import { Record } from 'immutable'
import FirebaseList from './firebaseList'
import { houseCategories, getHouseCategories } from './actions'

const Task = new Record( {
  completed: false,
  key: null,
  title: null,
} )

export const subscribeEvent = new FirebaseList(
  {
    onSuccess: getHouseCategories,
    onFailure: houseCategories.failure,
  },
  Task
)
