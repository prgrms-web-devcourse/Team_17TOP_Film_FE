import { ChangeEvent, ReactNode } from 'react';

export interface UploadProps {
  onChange(e: ChangeEvent<HTMLInputElement>): void;
  children?: ReactNode;
  name?: string;
  accept?: string;
  value?: File;
  dropable: boolean;
}
