/**
 * Check if all the values in a multidimensional object are the same
 */
module.exports = function areAllSameValues(input = {}){
    // initiate some utility functions to take care of all the nesting within our data structure
    const flatObject = (obj = {}) => Object.values(obj).map(value => value instanceof Object ? flatObject(value) : value)
    const flatDeepArray = (arr = []) => arr.flat(Infinity)
    
    const deepList = flatObject(input)
    const values = flatDeepArray(deepList)
    const uniqueValues = [...new Set(values)]

    // For efficiency in this problem since we are only concerned about the list of unique values to only output one element, we are safe to check that the second element in this list is undefined.
    // // Doing a .length is not very efficient if your unique list ends up being an enourmous amount of elements.
    return uniqueValues[1] === undefined
}