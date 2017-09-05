const info = ( { officeAddress, callCenter, hotLine } ) => {
  return [
    {
      icon: { type: 'material', name: 'location-on' },
      title: 'Head Office สำนักงานใหญ่ (อ่อนนุช)',
      description: officeAddress,
    },
    {
      icon: { type: 'material', name: 'phone-in-talk' },
      title: 'ศูนย์บริการแจ้งซ่อม (Call Center)',
      description: callCenter,
    },
    {
      icon: { type: 'material', name: 'phone-in-talk' },
      title: 'ศูนย์รับร้องเรียน',
      description: hotLine,
    },
  ]
}
export { info }
