const { check } = require('../src/checker');
const test = require('blue-tape');

test('should find conflicts', (t) =>
	check('test/fail').then((conflicts) => {
		t.ok(conflicts.length > 0);
		t.ok(conflicts.includes('indentation'));
	}));

test('should not find conflicts', (t) =>
	check('test/pass').then((conflicts) => {
		t.equal(conflicts, null);
	}));

test('should not find config', (t) =>
	check().catch((err) => {
		t.ok(/No configuration provided/.test(err.message));
	}));
