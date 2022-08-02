// We need to tell TypeScript that when we write "import styles from './styles.scss' we mean to load a module (to look for a './styles.scss.d.ts').
declare module "*.scss";

declare namespace NodeJS {
  interface Process {
    browser: boolean;
  }
}

declare module "*.jpg" {
  export default "" as string;
}
declare module "*.png" {
  export default "" as string;
}
declare module "*.gif" {
  export default "" as string;
}
