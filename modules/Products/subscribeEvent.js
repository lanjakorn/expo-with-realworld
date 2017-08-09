import { Record } from 'immutable'
import FirebaseList from './firebaseList'
import { getProducts, products } from './actions'

const Task = new Record( {
  completed: false,
  key: null,
  title: null,
} )

export const subscribeEvent = new FirebaseList(
  {
    onSuccess: getProducts,
    onFailure: products.failure,
  },
  Task
)
