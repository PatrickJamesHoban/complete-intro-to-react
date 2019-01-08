// @flow

export type Show = {
  title: string,
  description: string,
  year: string,
  imdbID: string,
  trailer: string,
  poster: string
};

// place to create types that the rest of the project needs.
declare var module: {
  hot: {
    accept(path: string, callback: () => void): void
  }
};