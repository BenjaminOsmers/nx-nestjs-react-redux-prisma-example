module.exports = {
  displayName: 'backend-api-api-shared-entities-data-acess',
  preset: '../../../../../../../jest.preset.ts',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory:
    '../../../../../../../coverage/libs/backend/api/api/shared/entities/data-acess',
};
