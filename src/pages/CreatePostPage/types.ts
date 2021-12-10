export interface SecondStepData {
  imageFiles: (File | undefined)[];
  title: string;
  previewText: string;
  content: string;
}

export interface Location {
  latitude: number;
  longitude: number;
}
