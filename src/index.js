
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || !matrix.length) {
    return []
  }
 return  matrix.reduce((accum, current, ind)=>{
    if(ind % 2 !== 0) {
      current.reverse()
    }
    return accum.concat(current)
  })
}
