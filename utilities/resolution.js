import { Dimensions, Platform } from 'react-native'

const isIos = Platform.OS === 'ios'
const isIphoneX = isIos && Dimensions.get( 'window' ).height === 812

const baseNavMarginTop = () => ( isIphoneX ? 22 + 14 : 22 )

export { baseNavMarginTop, isIos, isIphoneX }
