const NonRepeatCharacter = (word) => {
  if (word.length === 1) {
    return word
  } else {
    for (let i = 0; i < word.length; i++) {
      const result = word.charAt(i).toLowerCase()
      // console.log(result)
      // console.log(word.indexOf(result))     // 0  1 1 1 4 ...
      // console.log(word.lastIndexOf(result)) // 15 3 3 3 4 ... 
      if (word.indexOf(result) === word.lastIndexOf(result)) {
      return result
      }
    }
  }
}

console.log(NonRepeatCharacter('ieeemansourasocity'))
