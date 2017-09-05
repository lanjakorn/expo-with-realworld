const normalizedCaseStudies = data =>
  data && Object.keys( data ).length !== 0
    ? Object.keys( data ).reduce(
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
    : {
      caseStudiesById: {},
      caseStudyIds: [],
    }

export { normalizedCaseStudies }
