module.exports = {
	roots: ['<rootDir>/test/'],
	transform: {
		'^.+\\.(t|j)sx?$': '@swc/jest',
	},
	testRegex: '(/__tests__/.*|\\.(test|spec))\\.[tj]sx?$',
	moduleFileExtensions: ['ts', 'js'],
};
