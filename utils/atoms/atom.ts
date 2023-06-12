import { RecoilState, SerializableParam, atom, atomFamily } from 'recoil';

export interface ModalAtomFamilyType {
  id: SerializableParam;
  isOpen: boolean;
  title: string;
}

export const modalsAtomFamily: (param: SerializableParam) => RecoilState<ModalAtomFamilyType> = atomFamily<
  ModalAtomFamilyType,
  SerializableParam
>({
  key: 'modalsAtomFamily',
  default: (id: SerializableParam) => ({
    id,
    isOpen: false,
    title: '',
  }),
});

export const skeletonAtom: RecoilState<boolean> = atom<boolean>({
  key: 'skeletonAtom',
  default: false,
});

export const redirectionAtom = atom<boolean>({
  key: 'redirectionAtom',
  default: false,
});
