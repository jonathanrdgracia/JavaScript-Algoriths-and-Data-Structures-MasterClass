/**
 * Give two strings, write a function to determine if the second is an anagram of the first.
 */

const validAnagram=(term1,term2)=>{
    
    const termLength1 = term1.replace(/\s/g, '').length
    const termLength2 = term2.replace(/\s/g, '').length
    
    let termObject1 = {}
    let termObject2 = {}
    
    if(termLength1 != termLength2) return false
    
    for (let value = 0; value < termLength1; value++) {
        let letter = term1.replace(/\s/g, '')[value]
        termObject1[letter] = ( termObject1[letter] || 0 ) + 1
    }
   
    for (let value = 0; value < termLength2; value++) {
        let letter = term2.replace(/\s/g, '')[value]
        termObject2[letter] = ( termObject2[letter] || 0 ) + 1
    }

    for(let i = 0; i < termLength2; i++){
        let letter = term2.replace(/\s/g, '')[i]

        if(termObject2[letter] != termObject1[letter]) return false
        
    }
    return true
 }
   console.log( validAnagram('mapa','pama'));