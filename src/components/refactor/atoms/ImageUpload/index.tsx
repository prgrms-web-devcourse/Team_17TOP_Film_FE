import { useRef, useMemo, useCallback } from 'react';
import { Upload } from '../../../atoms';
import Toast from '../../../organism/Toast';
import { ACCEPTED_IMAGE_FILE_FORMAT } from './constants';
import { ImageUploadProps } from './type';

const ImageUpload = ({
  children,
  name,
  accept,
  droppable,
  value,
  fileDelete,
  onChange,
  ...props
}: ImageUploadProps) => {
  const acceptedFileFormatList = useRef<string[]>([]);
  useMemo(() => {
    for (const item of accept) {
      if (item === 'all') {
        acceptedFileFormatList.current = [ACCEPTED_IMAGE_FILE_FORMAT.all];
        return;
      }
      acceptedFileFormatList.current.push(ACCEPTED_IMAGE_FILE_FORMAT[item]);
    }
  }, [accept]);

  const handleFileChange = useCallback(
    (file: File) => {
      if (!file) return;
      const { type } = file;
      const mainType = type.split('/')[0];

      if (mainType !== 'image') {
        Toast.warn('이미지 파일만 업로드 가능합니다.');
        onChange(null);
        return;
      }

      if (
        acceptedFileFormatList.current[0] !== ACCEPTED_IMAGE_FILE_FORMAT.all &&
        !acceptedFileFormatList.current.includes(type)
      ) {
        Toast.warn(`${acceptedFileFormatList.current.join(', ')} 확장자만 업로드 가능합니다.`);
        onChange(null);
        return;
      }
      onChange(file);
    },
    [onChange, acceptedFileFormatList.current],
  );

  return (
    <Upload
      name={name}
      accept={acceptedFileFormatList.current.join(', ')}
      droppable={droppable}
      value={value}
      fileDelete={fileDelete}
      onChange={handleFileChange}
      {...props}
    >
      {children}
    </Upload>
  );
};
export default ImageUpload;
