function longestConsec(strarr, k) {
    //find the longest string k number of times
    let wordArr = []
    let longestLength = 0
    let longestWord = ''
    let finalWord = ''
    
    while (wordArr.length < k) {
        longestLength = 0
        for (let word of strarr) {
            if (longestLength < word.length && !wordArr.includes(word)) {
                longestLength = word.length
                longestWord = word
            }
        }
        wordArr.push(longestWord)
    }
    
    for (let i = 0; i < strarr.length; i++) {
        if (wordArr.includes(strarr[i])) {
            finalWord += strarr[i]
        }
    }
    return finalWord
}