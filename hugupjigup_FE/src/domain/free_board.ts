export type BoardType = 'NOTICE' | 'FREE';

export type CreateFreeBoardDto = {
  title: string;
  content: string;
  boardType: BoardType;
  userId: number;
};

export type CreateFreeBoardResponseDto = {
  id: number;
  boardType: BoardType;
  title: string;
  content: string;
  userNickname: string;
  views: number;
  createdAt: string;
  updatedAt: string;
  comments: null; // comment 는 아직 구현 하지 않았기 때문에 null
};
