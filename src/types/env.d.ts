interface ImportMetaEnv {
  readonly [key: string]: string;
}

declare interface ImportMeta {
  readonly env: ImportMetaEnv;
}
