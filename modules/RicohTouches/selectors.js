const ricohTouchesByIdSelector = state => state.ricohTouches.ricohTouchesById
const ricohTouchesIdsSelector = state => state.ricohTouches.ricohTouchesIds
const isFetchingSelector = state => state.ricohTouches.isFetching

export { ricohTouchesByIdSelector, ricohTouchesIdsSelector, isFetchingSelector }
