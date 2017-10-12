import { createSelector } from 'reselect'

const newslettersByIdSelector = state => state.newsletters.newslettersById
const newslettersIdsSelector = state => state.newsletters.newslettersIds
const isFetchingSelector = state => state.newsletters.isFetching

const currentNewsletterSelector = state => state.newsletters.newsletter

const newsletterSelector = createSelector(
  currentNewsletterSelector,
  newslettersByIdSelector,
  ( currentNewsletter, items ) => {
    return items[ currentNewsletter ]
  }
)

export {
  newslettersByIdSelector,
  newslettersIdsSelector,
  isFetchingSelector,
  currentNewsletterSelector,
  newsletterSelector,
}
