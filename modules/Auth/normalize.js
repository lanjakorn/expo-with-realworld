const normalize = data => {
  return data.reduce(
    ( p, c ) => {
      return {
        ...p,
        LoginById: {
          ...p.LoginById,
          [ c.id ]: c,
        },
        LoginIds: [ ...p.LoginIds, c.id ],
      }
    },
    {
      LoginById: {},
      LoginIds: [],
    }
  )
}

export default normalize
