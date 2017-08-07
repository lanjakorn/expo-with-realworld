import { createSelector } from 'reselect'
import { Langs } from 'constants'

const getSettingsSelector = state => state.settings
const getLangSelector = state => state.settings.lang
const getDefaultTabSelector = state => getSettings( state ).default_tab

const getWordsByLangSelector = createSelector(
  getLangSelector,
  lang => Langs[ lang ]
)

export { getSettingsSelector, getDefaultTabSelector, getWordsByLangSelector }
