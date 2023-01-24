declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_CLIENT: string;
    }
  }
}

export {};
