const configsSelector = state => state.app.configs
const ricohSmartDeviceConnectorAppSelector = state =>
  state.app.configs.ricohSmartDeviceConnectorApp
const isFetchingSelector = state => state.app.isFetching

export {
  configsSelector,
  ricohSmartDeviceConnectorAppSelector,
  isFetchingSelector,
}
