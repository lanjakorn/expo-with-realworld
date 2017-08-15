// import * as mocks from 'mocks/caseStudies'

const normalizedCaseStudies = ( data = {}, houseCategoriesCaseStudies ) =>
  Object.keys( houseCategoriesCaseStudies ).reduce(
    ( p, c ) => {
      return {
        ...p,
        caseStudiesById: data[ houseCategoriesCaseStudies[ c ] ]
          ? {
            ...p.caseStudiesById,
            [ houseCategoriesCaseStudies[ c ] ]: {
              ...data[ houseCategoriesCaseStudies[ c ] ],
            },
          }
          : { ...p.caseStudiesById },
        caseStudyIds: [ ...p.caseStudyIds, houseCategoriesCaseStudies[ c ] ],
      }
    },
    {
      caseStudiesById: {},
      caseStudyIds: [],
    }
  )

export { normalizedCaseStudies }
