export interface MemberType {
  id: number;
  name: string;
  imageUrl: string;
}

export interface MemberListType {
  title: string;
  members: MemberType[];
}
