import { nav } from 'utilities'

const strategy = props => {
  const {
    navigation,
    productIdOfProductCategory,
    productIdOfSolutionCategory,
    solutionCategoryId,
  } = props

  const extra = () => {
    const faq = {}
    switch ( nav.getNavigationParam( navigation, 'prevScreen' ) ) {
    case 'productDetailScreen':
      switch ( nav.getNavigationParam( navigation, 'module' ) ) {
      case 'productCategories':
        return {
          ...faq,
          productId: productIdOfProductCategory,
          solutionCategoryId: '',
        }
      case 'solutionCategoris':
        return {
          ...faq,
          productId: productIdOfSolutionCategory,
          solutionCategoryId: '',
        }
      default:
        return null
      }
    case 'solutionCategorisScreen':
      switch ( nav.getNavigationParam( navigation, 'module' ) ) {
      case 'solutionCategoris':
        return {
          ...faq,
          productId: '',
          solutionCategoryId,
        }
      default:
        return null
      }
    default:
      return null
    }
  }

  return {
    ...props,
    ...extra(),
  }
}

export default strategy
