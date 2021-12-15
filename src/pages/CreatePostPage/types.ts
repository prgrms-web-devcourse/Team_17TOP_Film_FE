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
  handleAvailableAt(data: string | null): void;
  latitude: number | undefined;
  longitude: number | undefined;
  goPrevStep(): void;
  storedAvailableAt: string | null;
  handleIsConfirm(): void;
}

export interface ConfirmModalProps {
  isModalOpen: true;
  handleIsModalClose(): void;
  saveAvailableAt(): void;
  handleIsConfirm(): void;
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

export interface FirstStepProps {
  goNextStep(): void;
  location: Location | null;
  handleLocation(data: Location): void;
}
