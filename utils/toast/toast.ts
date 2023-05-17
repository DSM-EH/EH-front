import { toast } from 'react-toastify';

export const customToast = (message: string, type: 'success' | 'error', action?: string) => {
  switch (type) {
    case 'success':
      toast.success(message ? message : '성공적으로 완료되었습니다.', {
        autoClose: 1000,
        position: toast.POSITION.TOP_RIGHT,
      });
      break;
    case 'error':
      toast.error(message ? message : '다시 한번 시도해주세요.', {
        autoClose: 1000,
        position: toast.POSITION.TOP_RIGHT,
      });
      break;
    default:
      toast.error('개발자오류', {
        autoClose: 1500,
        position: toast.POSITION.TOP_RIGHT,
      });
      break;
  }
};
