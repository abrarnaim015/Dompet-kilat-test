

function isPalindrome(str) {
  let tampStr = ''
  for (let i = str.length-1; i >= 0 ; i--) {
    tampStr += str[i]
  }
  if(tampStr === str) {
    return true
  } else {
    return false
  }
}

console.log(isPalindrome('abcba'), '<<< Palindrome Test')
console.log(isPalindrome('abcde'), '<<< Palindrome Test')

// ===============================================================================

const arr = ['a', 'a', 'a', 'b', 'c', 'c', 'b', 'b', 'b', 'd', 'd', 'e', 'e', 'e']

function group(testArr) {
  let kamus = 'abcdefghijklmnopqrstuvwxyz'
  let tampArr = []

  for(let i = 0; i < kamus.length; i++) {
    let idxKamus = kamus[i]
    let tampArrIndex = []
    for(let j = 0; j < testArr.length; j++) {
      if(idxKamus === testArr[j]) {
        tampArrIndex.push(testArr[j])
      }
    }
    if(tampArrIndex.length !== 0) {
      tampArr.push(tampArrIndex)
    }
  }

  return tampArr
}

// [ {3, ‘a’}, {1, ‘b’}, {2, ‘c’}, {3, ‘b’}, {2, ‘d’}, {3, ‘e’} ]

function jumlahAlfabet(testArr) {
  let tampArr = []

  for(let i = 0; i < testArr.length; i++) {
    let jumlahAlfabetIndex = 0
    for(let j = 0; j < testArr.length; j++) {
      if(testArr[i] === testArr[j]){
        jumlahAlfabetIndex++
        if(testArr[i] !== testArr[j+1]) {
          let huruf = testArr[j]
          let angka = jumlahAlfabetIndex
          tampArr.push({angka, huruf})
          jumlahAlfabetIndex = 0
          continue
        }
      }
    }
    // if(jumlahAlfabetIndex !== 0) {
    //   tampArr.push([jumlahAlfabetIndex, idxKamus])
    // }
  }

  return tampArr
}

console.log(group(arr))
console.log(jumlahAlfabet(arr))

/**
  Input:
  findPrimeByRange(11, 40)
  Result:
  [11, 13, 17, 19, 23, 29, 31, 37]
 */

 /*
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
  */
  function findPrimeByRange(strt, end) {
    let output = []
    
    // for(let i = strt; i <= end; strt++) {
    //   if(i%2 !== 0) {
    //     if(i%3 !== 0) {
    //       if(i%5 !== 0) {
    //         if(i%7 !== 0) {
    //           output.push(i)
    //         }
    //       }
    //     }
    //   }
    //   if(i%2 !== 0 && i%3 !== 0 && i%4 !== 0 && i%5 !== 0 && i%6 !== 0 && i%7 !== 0 && i%8 !== 0 && i%9 !== 0 && i%10 !== 0) {
    //     output.push(i)
    //   }
    // }

    return output
  }

 console.log(findPrimeByRange(11, 40))
