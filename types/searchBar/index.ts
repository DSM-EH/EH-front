import { ChangeEvent } from 'react';

export interface SearchBarType {
  placeholder: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  type: 'text';
  name?: string;
}
