import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const sizeup = keyframes`
0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.05);
  }
`;

const sizedown = keyframes`
  0% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const popInFromBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(400px) scale(0.75);
  }
  75% {
    opacity: 1;
    transform: translateY(-16px) scale(1.0);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }`;

const popOutToBottom = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0px) scale(1.0);
  }
  100% {
    opacity: 0;
    transform: translateY(400px) scale(0.75);
  }`;

const popIn = keyframes`
  0% {
    opacity: 0.7;
    transform: scale3d(0.8, 0.8, 1);
  }
  100% {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;

const transitions = {
  fadeIn,
  fadeOut,
  sizeup,
  sizedown,
  popInFromBottom,
  popOutToBottom,
  popIn,
};

export default transitions;
