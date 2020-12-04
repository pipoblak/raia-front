import mockEnvConfig from './next.config.js';

jest.mock('next/config', () => () => ({ publicRuntimeConfig: mockEnvConfig }));
