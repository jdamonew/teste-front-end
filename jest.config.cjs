module.exports = {
    testEnvironment: 'jsdom',

    setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.ts'],

    transform: {
        '^.+\\.(ts|tsx)$': [
            'ts-jest',
            {
                tsconfig: '<rootDir>/tsconfig.app.json',
            }
        ]
    },

    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        '\\.(png|jpg|jpeg|svg)$': '<rootDir>/src/tests/fileMock.ts',
        '\\.(css|scss|sass)$': 'identity-obj-proxy'
    },

    testMatch: ['**/?(*.)+(test|spec).ts?(x)']
};
