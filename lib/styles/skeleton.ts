import { keyframes } from '@emotion/react';

const skeletonAnimation = keyframes`
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 0.5;
  }
`;

const skeletonLoading = keyframes`  
  to {
    background-position: 315px 0, 0 0, 0 190px, 50px 195px;
  }
`;

const skeleton = {
  skeletonAnimation,
  skeletonLoading,
};

export default skeleton;
