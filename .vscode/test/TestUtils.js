module.exports.performAsyncTest = async function(testName, testFunction, skip) {
    if (skip) {
        return
    }
    console.log('Starting Test: ' + testName);
    await testFunction();
    console.log('Performed Test: ' + testName);
}