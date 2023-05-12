import { useRecoilState } from 'recoil';
import { modalsAtomFamily, ModalAtomFamilyType } from '@/utils/atoms/atom';

export const useModal = (modalName: string) => {
  const [modal, setModal] = useRecoilState<ModalAtomFamilyType>(modalsAtomFamily(modalName));

  const openModal = () => {
    setModal((prev: ModalAtomFamilyType) => ({ ...prev, isOpen: true }));
  };

  const closeModal = () => {
    setModal((prev: ModalAtomFamilyType) => ({ ...prev, isOpen: false }));
  };

  return { modal, openModal, closeModal };
};
