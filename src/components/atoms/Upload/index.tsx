import { useCallback, useEffect, useRef, useState } from 'react';
import { UploadContainer, UploadInput } from './style';
import { UploadProps } from './types';

const Upload = ({
  children,
  name,
  accept,
  droppable = true,
  value,
  fileDelete,
  onChange,
  ...props
}: UploadProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState(value);
  const [uploading, setUploading] = useState(false);

  const handleClickContainer = useCallback(() => {
    inputRef.current?.click();
  }, []);

  const handleDragEnter = useCallback((e) => {
    if (!droppable) return;
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer?.items) {
      setUploading(true);
    }
  }, []);

  const handleDragOver = useCallback((e) => {
    if (!droppable) return;
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragLeave = useCallback((e) => {
    if (!droppable) return;
    e.preventDefault();
    e.stopPropagation();
    setUploading(false);
  }, []);

  const handleDropFile = useCallback((e) => {
    if (!droppable) return;
    e.preventDefault();
    e.stopPropagation();

    const { files } = e.dataTransfer;
    if (files) {
      const changedFile = files[0];
      setFile(changedFile);
      onChange(changedFile);
      setUploading(false);
    }
  }, []);

  const handleFileChange = useCallback((e) => {
    const { files } = e.target;

    if (files) {
      const changedFile = files[0];
      setFile(changedFile);
      onChange(changedFile);
    }
  }, []);

  useEffect(() => {
    if (!fileDelete) {
      return;
    }
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  }, [fileDelete]);

  return (
    <UploadContainer
      onClick={handleClickContainer}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDropFile}
      {...props}
    >
      <UploadInput
        ref={inputRef}
        type="file"
        name={name}
        accept={accept}
        onChange={handleFileChange}
      />
      {typeof children === 'function' ? children(file, uploading) : children}
    </UploadContainer>
  );
};

export default Upload;
