// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("shuffleArr", () => {
    it("takes in an array, removes the first item from the array and shuffles the remaining content.", () => {
        const colors1 = ["purple", "blue", "green", "yellow", "pink"]
        // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
        const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
        // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
      expect(shuffleArr(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
      expect(shuffleArr(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
    })
  })

//============================ GOOD ERROR FAILURE =============================//
//   ● shuffleArr › takes in an array, removes the first item from the array 
// and shuffles the remaining content.

//   ReferenceError: shuffleArr is not defined
//============================================================================//


// b) Create the function that makes the test pass.
//========================= PSEUDO CODE ======================================//
//create a function
//must take in an array as parameter
//use .slice() method to remove the first value in the array, which is at zero index 
//use sort() method followed by the Math.random() method to randomly sort the elements inside the array
//return array with first index removed and in randomized order
//===========================================================================//

const shuffleArr = (array) => {
    return array.slice(0).sort(() => Math.random() - 0.5)
    }

// TEST PASSED! 




// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

describe("minMax", () => {
    it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order.", () => {
        const nums1 = [3, 56, 90, -8, 0, 23, 6]
        // Expected output: [-8, 90]
        const nums2 = [109, 5, 9, 67, 8, 24]
        // Expected output: [5, 109]
      expect(minMax(nums1)).toEqual(([-8, 90]))
      expect(minMax(nums2)).toEqual(([5, 109]))
    })
  })
//======================== GOOD ERROR FAILURE ===============================//
// ● minMax › takes an array of numbers and returns an array of the minimum 
// and maximum numbers in that order.

// ReferenceError: minMax is not defined
//===========================================================================//


// b) Create the function that makes the test pass.
//========================== PSEUDO CODE ====================================//
//create a function
//must take in an array as a parameter 
//create and set a new variable to the array followed by the 
//Math.min()method with the parameter of the array in order to get the smallest number in the array. 
//create another variable and set it to the Math.max() method with the parameter
//of the array in order to get the largest number in the array
//return the new variables created that contains both minimum and maximum numbers
//===========================================================================//

const minMax = (array) => {
    let newMin = Math.min(...array)
    let newMax = Math.max(...array)
    return [newMin, newMax]
  }

// TEST PASSED! 




// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe("noDup", () => {
    it("that takes in two arrays as arguments and returns one array with no duplicate values.", () => {
        const testArray1 = [3, 7, 10, 5, 4, 3, 3]
        const testArray2 = [7, 8, 2, 3, 1, 5, 4]
        // Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
      expect(noDup(testArray1, testArray2)).toEqual(expect.arrayContaining([3, 7, 10, 5, 4, 8, 2, 1]))
    })
  })
//=========================== GOOD ERROR FAILURE =============================//
//  ● noDup › that takes in two arrays as arguments and returns one array 
//with no duplicate values.
  
// ReferenceError: noDup is not defined
//===========================================================================//


// b) Create the function that makes the test pass.
//=========================== PSEUDO CODE ===================================//
//create a function
//must take in 2 arrays as a parameter 
//create a new variable 
//assign the new variable to the first and second array concatenated 
//create another new variable and use the set() method, which will implicitly
//delete the duplicates after setting the variable containing the array as 
//the parameter.
//return the new variable created containing the removed duplicate values
//==========================================================================//

const noDup = (arr1, arr2) => {
  let noDuplicates = arr1.concat(arr2)
  let newnew = [...new Set(noDuplicates)]
  return newnew
}

// TEST PASSED! 