import { skeletonAtom } from '@/utils/atoms/atom';
import { useRecoilState } from 'recoil';

export const useSkeleton = () => {
  const [isLoading, setIsLoading] = useRecoilState<boolean>(skeletonAtom);

  const setTimer = () => {
    const timer: NodeJS.Timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  };

  return { isLoading, setTimer };
};
