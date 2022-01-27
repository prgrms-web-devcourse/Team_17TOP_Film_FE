import { ReactNode } from 'react';

export interface UploadProps {
  onChange(file: File | null): void;
  children?: ReactNode;
  name?: string;
  accept?: string;
  value?: File;
  droppable?: boolean;
  fileDelete?: boolean;
}
