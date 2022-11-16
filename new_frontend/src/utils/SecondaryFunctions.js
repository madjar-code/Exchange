function unique(array) {
  let result = []
  for (let element of array) {
    if (!result.includes(element)) {
      result.push(element)
    }
  }

  return result
}


export default unique