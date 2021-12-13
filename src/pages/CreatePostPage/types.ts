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

export interface ConfirmModalProps {
  isModalOpen: true;
  handleIsModalClose(): void;
  saveAvailableAt(): void;
}

export interface SecondStepProps {
  goNextStep(): void;
  goPrevStep(): void;
  handleSecondStepData(obj: SecondStepData): void;
}

export interface AlertModalProps {
  isModalOpen: boolean;
  alertText: string;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
