import { createSelector } from 'reselect'

const currentServiceSelector = state => state.services.service
const servicesByIdSelector = state => state.services.servicesById
const isFetchingSelector = state => state.services.isFetching

const servicesSelector = createSelector(
  currentServiceSelector,
  servicesByIdSelector,
  ( currentService, items ) => {
    return items[ currentService ]
  }
)

export {
  currentServiceSelector,
  isFetchingSelector,
  servicesByIdSelector,
  servicesSelector,
}
