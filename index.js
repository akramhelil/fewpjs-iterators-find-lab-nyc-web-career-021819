const testVar = {}

function testFunc() {
  return "hi"
}
function superbowlWin(array) {
  let res = array.find(item => item.result === "W"  )
  if (res) {
    return res.year;
  }
}