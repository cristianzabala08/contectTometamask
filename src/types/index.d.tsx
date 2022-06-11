export {};

declare global {
  interface Window {
    ethereum: any;
  }
}

declare module 'solid-js' {
  namespace JSX {
    interface Directives {
      formGroup?: {};
    }

    interface InputHTMLAttributes<T> {
      formControlName?: string;
    }

    interface SelectHTMLAttributes<T> {
      formControlName?: string;
    }

    interface HTMLAttributes<T> {
      formGroupName?: string;
    }
  }
}