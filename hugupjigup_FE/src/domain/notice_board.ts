import type { BoardType } from "../domain/free_board";

export type NoticeBoard = {
  noticeId: number;
  noticeTitle: string;
  noticeContent: string;
  boardType: BoardType;
  authorId: number;
  noticeViews: number;
  createDate: string;
  updateDate: string;
};

export type CreateAndUpdateNoticeBoardDto = {
  title: string;
  content: string;
  boardType: BoardType;
};
