// import { createSelector } from 'reselect'

const companyProfileSelector = state => state.companyProfile.companyProfile
const isFetchingSelector = state => state.companyProfile.isFetching

export { companyProfileSelector, isFetchingSelector }
