export interface Field {
  validate: () => Promise<boolean> | undefined;
  resetField: () => void;
}

export const formContextKey = 'formContextKey';
