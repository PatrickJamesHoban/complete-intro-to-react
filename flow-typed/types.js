// @flow

// place to create types that the rest of the project needs.
declare var module: {
  hot: {
    accept:(path: string, callback: () => void): void
  }
};