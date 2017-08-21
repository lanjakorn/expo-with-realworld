const normalizedCaseStudies = ( data = {} ) =>
  Object.keys( data ).reduce(
    ( p, c ) => {
      return {
        ...p,
        caseStudiesById: {
          ...p.caseStudiesById,
          [ c ]: {
            ...data[ c ],
          },
        },
        caseStudyIds: [ ...p.caseStudyIds, c ],
      }
    },
    {
      caseStudiesById: {},
      caseStudyIds: [],
    }
  )

export { normalizedCaseStudies }
