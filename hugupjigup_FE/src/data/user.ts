import apiClient from "./api_client";

export const isDuplicatedEmail = async (email: string): Promise<boolean> => {
  // if exist email return true, else return false
  const response = await apiClient.get(`/api/v1/auth/duplicate/email/${email}`);
  if (response.status !== 200) {
    throw new Error("Failed to check email duplication");
  }

  return response.data.result;
};

export const isDuplicatedNickname = async (nickname: string): Promise<boolean> => {
  // if exist nickname return true, else return false
  const response = await apiClient.get(`/api/v1/auth/duplicate/nickname/${nickname}`);
  if (response.status !== 200) {
    throw new Error("Failed to check nickname duplication");
  }

  return response.data.result;
}

