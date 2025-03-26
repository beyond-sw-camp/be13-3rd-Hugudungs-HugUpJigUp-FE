export type UserInfo = {
  userId: number,
  nickname: string,
  email: string,
  currentJob: string,
  desiredJob: string,
  postCount: number,
  commentCount: number,
  matchingCommentCount: number,
  matchingCount: number,
  mentorProfile: Profile,
  menteeProfile: Profile
}

export type Profile = {
  rate: number,
  profileType: string,
  introduction: string
}

export type UpdateUserInfoDto = {
  name: string,
  email: string,
  password: string
};

export type UpdateUserInfoResponseDto = {
  name: string,
  email: string,
}

export type UpdateMentorProfileDto = {
  currentJob : string,
  introduction: string,
  experience: string
}

export type UpdateMenteeProfileDto = {
  desiredJob: string,
  introduction: string,
  experience: string
}
