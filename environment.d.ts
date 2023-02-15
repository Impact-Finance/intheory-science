declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_CLIENT: string;
      HUBSPOT_TOKEN: string;
    }
  }
}

export {};
