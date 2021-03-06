export type ToastOptions = {
  type?: string;
  mask?: boolean;
  message?: string;
  position?: string;
  duration?: number;
  forbidClick?: boolean;
}

export interface Toast {
  (message: ToastOptions | string, options?: ToastOptions): void;
  loading(options?: ToastOptions): void;
  success(options?: ToastOptions): void;
  fail(options?: ToastOptions): void;
  clear(): void;
}

export const Toast: Toast;
