import { ChangeEvent } from 'react';

export interface TextFieldType {
  text: string;
  type?: 'text' | 'password' | 'number';
  name?: string;
  placeholder: string;
  value?: string | number;
  error?: boolean;
  errorMsg?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  width?: number;
  height?: number;
  pattern?: string;
}
