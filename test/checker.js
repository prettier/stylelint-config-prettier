const assert = require('assert');
const { check } = require('../src/checker.js');

async function test() {
	const error = await check().catch((error) => error);

	assert(
		/No configuration provided/.test(error.message),
		'should handle not found'
	);

	const fail = await check('./test/fail');

	assert(fail.length > 0, 'should have errors');
	assert(fail.includes('indentation'), 'should have indent error');

	const pass = await check('./test/pass');

	assert(pass == null, 'should have no errors');
}

test().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
