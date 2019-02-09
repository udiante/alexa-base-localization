module.exports.performAsyncTest = async function(testName, testFunction, skip) {
    if (skip) {
        return
    }
    try {
        console.log('Starting Test: ' + testName);
        await testFunction();
    } catch (error) {
        console.error('Test failed: ' + testName, error)
    }
    console.log('Performed Test: ' + testName);
}