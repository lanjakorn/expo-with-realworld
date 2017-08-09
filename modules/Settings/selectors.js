import { createSelector } from 'reselect'
import { Langs } from 'constants'

const getLangSelector = state => state.settings.lang
const getSettingsSelector = state => state.settings

const getDefaultTabSelector = createSelector(
  getSettingsSelector,
  settings => settings.default_tab
)

const getWordsByLangSelector = createSelector(
  getLangSelector,
  lang => Langs[ lang ]
)

export { getDefaultTabSelector, getSettingsSelector, getWordsByLangSelector }
