import { createSelector } from 'reselect'

const currentCaseStudySelector = state => state.caseStudies.caseStudy
const caseStudiesByIdSelector = state => state.caseStudies.caseStudiesById
const isFetchingSelector = state => state.caseStudies.isFetching

const caseStudiesSelector = createSelector(
  currentCaseStudySelector,
  caseStudiesByIdSelector,
  ( currentCaseStudy, items ) => {
    return items[ currentCaseStudy ]
  }
)

export {
  caseStudiesByIdSelector,
  caseStudiesSelector,
  currentCaseStudySelector,
  isFetchingSelector,
}
