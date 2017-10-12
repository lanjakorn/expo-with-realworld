const newslettersState = data =>
  data && Object.keys( data ).length !== 0
    ? Object.keys( data ).reduce(
      ( p, c ) => {
        return {
          ...p,
          newslettersById: {
            ...p.newslettersById,
            [ c ]: {
              ...data[ c ],
            },
          },
          newslettersIds: [ ...p.newslettersIds, c ],
        }
      },
      {
        newslettersById: {},
        newslettersIds: [],
      }
    )
    : {
      newslettersById: {},
      newslettersIds: [],
    }

export { newslettersState }
