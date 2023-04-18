import { keyOfColorType } from "@/styles/theme/color";
import { ReactNode } from "react";

export interface ButtonStyleType {
  buttonColor: keyOfColorType;
  fontColor: keyOfColorType;
}

export interface ButtonPropsType
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonStyleType {
  children: ReactNode;
}