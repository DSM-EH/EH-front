import { SerializableParam, atomFamily } from 'recoil';

export interface ModalAtomFamilyType {
  id: SerializableParam;
  isOpen: boolean;
  title: string;
}

export const modalsAtomFamily = atomFamily<ModalAtomFamilyType, SerializableParam>({
  key: 'modalsAtomFamily',
  default: (id: SerializableParam) => ({
    id,
    isOpen: false,
    title: '',
  }),
});
