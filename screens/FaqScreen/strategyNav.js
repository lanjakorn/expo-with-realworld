import { nav } from 'utilities'

const strategy = props => {
  const {
    navigation,
    productCategories,
    productIdOfProductCategory,
    productIdOfSolutionCategory,
    solutionCategoryId,
  } = props

  const extra = () => {
    const faq = {}
    switch ( nav.getNavigationParam( navigation, 'prevScreen' ) ) {
    case 'productCategorisScreen':
      switch ( nav.getNavigationParam( navigation, 'module' ) ) {
      case 'productCategories':
        return {
          ...faq,
          productId: '',
          solutionCategoryId: '',
          productCategories: productCategories,
        }
      default:
        return null
      }
    case 'productDetailScreen':
      switch ( nav.getNavigationParam( navigation, 'module' ) ) {
      case 'productCategories':
        return {
          ...faq,
          solutionCategoryId: '',
          productCategories: '',
          productId: productIdOfProductCategory,
        }
      case 'solutionCategoris':
        return {
          ...faq,
          solutionCategoryId: '',
          productCategories: '',
          productId: productIdOfSolutionCategory,
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
          productCategories: '',
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
