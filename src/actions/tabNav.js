
export const changeCurrent = (value) => {
  // switch (value) {
  //   case 0:
  //     return {
  //       type: 'home',
  //       current:value
  //     }
  //   case 1:
  //     return {
  //       type: 'mine',
  //       current:value
  //     }
  //   case 2:
  //     return {
  //       type: 'category',
  //       current:value
  //     }
  //   case 3:
  //     return {
  //       type: 'publish',
  //       current:value
  //     }
  // }
  return {
    type: 'nav',
    current:value
  }
}




