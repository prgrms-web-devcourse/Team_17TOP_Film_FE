export interface SecondStepData {
  image: File | undefined | string;
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
  goPrevStep(): void;
}

export interface ConfirmModalProps {
  isModalOpen: true;
  handleIsModalClose(): void;
  saveAvailableAt(): void;
}

export interface SecondStepProps {
  goNextStep(): void;
  goPrevStep(): void;
  handleSecondStepData(data: SecondStepData): void;
  handleStoredSecondStepData(data: SecondStepData): void;
  storedSecondStepData: SecondStepData | null;
}

export interface AlertModalProps {
  isModalOpen: boolean;
  alertText: string;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
