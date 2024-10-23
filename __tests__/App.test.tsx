import 'react-native';
import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { setupServer } from 'msw/node';
import { handlers } from '../src/mocks/handlers';
import App from '../App';

// Note: import explicitly to use the types shipped with jest.
import { it } from '@jest/globals';

export const server = setupServer(...handlers);

beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());

it('Screen renders', async () => {
    render(<App />);
    await screen.findByText('Shuzenji');
});
