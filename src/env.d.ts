declare module 'process' {
  global {
    namespace NodeJS {
      interface ProcessEnv {
        NODE_ENV?: string;
        BASE_URL: string;
        API_KEY: string;
        // ...
      }
    }
  }
}
