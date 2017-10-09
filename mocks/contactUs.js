const info = ( { officeAddress, callCenter, hotLine } ) => {
  const [ firstOfficeAddress, ...restOfficeAddress ] = officeAddress
  const [ firstCallCenter, ...restCallCenter ] = callCenter
  const [ firstHotLine, ...restHotLine ] = hotLine

  return [
    {
      icon: { type: 'material', name: 'location-on' },
      title: firstOfficeAddress,
      descriptions: restOfficeAddress,
    },
    {
      icon: { type: 'material', name: 'phone-in-talk' },
      title: firstCallCenter,
      descriptions: restCallCenter,
    },
    {
      icon: { type: 'material', name: 'phone-in-talk' },
      title: firstHotLine,
      descriptions: restHotLine,
    },
  ]
}
export { info }
