import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import ImageUpload from '../../components/refactor/atoms/ImageUpload';
import {
  ImageUploadIcon,
  PreviewImg,
} from '../../pages/CreatePostPage/components/SecondStep/style';

const StyledImageUpload = styled(ImageUpload)<{ imageURL: string }>`
  border-radius: 4px;
  position: relative;
  border: ${({ imageURL }) => (imageURL ? 'none' : '1px solid')};
  width: 100%;
  height: ${({ imageURL }) => (imageURL ? 'auto' : '299px')};
  box-sizing: border-box;
`;

export default {
  title: 'Example/ImageUpload',
  component: StyledImageUpload,
  argTypes: {
    droppable: {
      type: { name: 'boolean' },
      control: { type: 'boolean' },
    },
  },
};

const ImageUploadEx = ({ ...props }) => {
  const [imageURL, setImageURL] = useState('');
  const [file, setFile] = useState<File>();

  const handleSetImageFile = (file: File) => {
    if (!file) {
      setImageURL('');
      setFile(undefined);
      return;
    }
    setFile(file);
  };

  const fileToDataURL = (file: File) => {
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setImageURL(e.target?.result as string);
      };
    } else {
      setImageURL('');
    }
  };

  useEffect(() => {
    if (file) {
      fileToDataURL(file);
    }
  }, [file]);
  return (
    <StyledImageUpload
      accept={['all']}
      onChange={handleSetImageFile}
      imageURL={imageURL}
      fileDelete={file ? false : true}
      {...props}
    >
      <ImageUploadIcon imageURL={imageURL}>+</ImageUploadIcon>
      {imageURL ? <PreviewImg src={imageURL} /> : ''}
    </StyledImageUpload>
  );
};

export const AllType = (args: any) => {
  return <ImageUploadEx {...args}></ImageUploadEx>;
};

export const JpegOnly = (args: any) => {
  return <ImageUploadEx accept={['jpeg']} {...args}></ImageUploadEx>;
};
