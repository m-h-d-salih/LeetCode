/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = sentence=>new Set(sentence).size===26;