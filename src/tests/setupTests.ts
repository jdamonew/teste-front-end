import "@testing-library/jest-dom"

const originalError = console.error;

beforeAll(() => {
    console.error = (...args: any[]) => {
        const message = args[0];

        if (
            typeof message === 'string' &&
            (
                message.includes('React does not recognize') ||
                message.includes('Invalid DOM property') ||
                message.includes('Received `true` for a non-boolean attribute')
            )
        ) {
            return;
        }

        originalError(...args);
    };
});

afterAll(() => {
    console.error = originalError;
});
