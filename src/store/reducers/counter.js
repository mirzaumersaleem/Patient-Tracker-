function counter(value = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    // IMPORTANT: returning simple value therefore it will be avaiable as 
    // simple value and not as object
    return value + 1
  case 'DECREMENT':
    return value - 1
  default:
    return value
  }
}

export default counter;