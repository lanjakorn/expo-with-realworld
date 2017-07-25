const getSettings = state => state.settings
const getDefaultTabOfSettings = state => getSettings( state ).default_tab

export { getSettings, getDefaultTabOfSettings }
