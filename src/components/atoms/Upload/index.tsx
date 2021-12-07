import styled from '@emotion/styled';
import { ChangeEvent, ReactNode, useCallback, useRef, useState } from 'react';

const Upload = ({ children, name, accept, dropable, value, onChange, ...props }: UploadProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState(value);
  const [uploading, setUploading] = useState(false);

  const handleClickContainer = useCallback(() => {
    inputRef.current?.click();
  }, []);

  const handleDragEnter = useCallback((e) => {
    if (!dropable) return;
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer?.items) {
      setUploading(true);
    }
  }, []);

  const handleDragOver = useCallback((e) => {
    if (!dropable) return;
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragLeave = useCallback((e) => {
    if (!dropable) return;
    e.preventDefault();
    e.stopPropagation();
    setUploading(false);
  }, []);

  const handleDropFile = useCallback((e) => {
    if (!dropable) return;
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

export interface UploadProps {
  onChange(e: ChangeEvent<HTMLInputElement>): void;
  children?: ReactNode;
  name?: string;
  accept?: string;
  value?: File;
  dropable: boolean;
}

const UploadContainer = styled.div`
  display: inline-block;
  cursor: pointer;
`;
const UploadInput = styled.input`
  display: none;
`;
