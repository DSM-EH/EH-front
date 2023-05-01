import { StaticImageData } from "next/image";

export interface ProfileType{
    imageUrl: string | StaticImageData;
    name: string;
    introduce: string;
    myprofile: boolean;
}