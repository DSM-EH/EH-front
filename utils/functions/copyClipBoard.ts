import { customToast } from '@/utils/toast/toast';

export const copyClipBoardOnClick = async (): Promise<void> => {
  const location: string = window.location.href;
  const path: string = decodeURIComponent(location);

  try {
    await navigator.clipboard.writeText(path);
    customToast('링크가 복사되었습니다.', 'success');
  } catch (err: unknown) {
    customToast('링크 복사에 실패했습니다.', 'error');
    console.error(err);
  }
};
