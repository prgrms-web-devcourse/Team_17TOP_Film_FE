export interface SecondStepData {
  imageFiles: { imageOrder: number; image: File | undefined }[];
  title: string;
  previewText: string;
  content: string;
}

export interface Location {
  latitude: number;
  longitude: number;
}

export interface ThirdStepProp {
  handleAvailableAt(data: string): void;
  latitude: number | undefined;
  longitude: number | undefined;
}
