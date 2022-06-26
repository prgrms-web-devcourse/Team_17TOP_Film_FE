import { UploadProps } from '../../../atoms/Upload/types';
import { ACCEPTED_IMAGE_FILE_FORMAT } from './constants';

export interface ImageUploadProps extends Omit<UploadProps, 'accept'> {
  accept: acceptedImageFileFormat[];
}
export type acceptedImageFileFormat = keyof typeof ACCEPTED_IMAGE_FILE_FORMAT;
