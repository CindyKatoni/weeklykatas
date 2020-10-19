function calc(expr) {
    // TODO: Your awesome code here
    if (expr == "") {
      return 0
    } else {
      let arr = expr.split(" ")
      if (arr.length > 1) {
        return eval(`${parseFloat(arr[0])}${arr[2]}${parseFloat(arr[1])}` )
      } else {
        return parseFloat(arr[0])
      }
    }
  }