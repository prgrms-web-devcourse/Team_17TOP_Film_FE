import { ReactNode } from 'react';

export interface UploadProps {
  onChange(file: File): void;
  children?: ReactNode;
  name?: string;
  accept?: string;
  value?: File;
  droppable: boolean;
}
