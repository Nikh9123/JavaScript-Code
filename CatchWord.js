
const wordfreQ = (words) => {
    let phrase = {}
    ket = words.split(' ')
    console.log(ket)
    for(let word of ket){
      if(word in phrase){
        phrase[word]++
      }
      else {
        phrase[word] = 1
      }
    }
    return phrase
  }
  console.log(wordfreQ('hello what what are you saying are you saying hello'))