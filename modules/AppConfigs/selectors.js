const configsSelector = state => state.app.configs
const ricohSmartDeviceConnectorAppSelector = state =>
  state.app.configs.ricohSmartDeviceConnectorApp
const isFetchingSelector = state => state.app.isFetching

const appPortalSelector = state => state.app.configs.appPortal

export {
  appPortalSelector,
  configsSelector,
  ricohSmartDeviceConnectorAppSelector,
  isFetchingSelector,
}
