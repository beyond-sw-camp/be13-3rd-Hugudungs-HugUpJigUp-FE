import type {CreateFreeBoardDto, CreateFreeBoardResponseDto} from "../domain/free_board";
import apiClient from "../data/api_client";


export const createFreeBoard =
  async (createFreeBoardDto: CreateFreeBoardDto): Promise<CreateFreeBoardResponseDto> => {
    const response = await apiClient.post('/api/v1/free', createFreeBoardDto);
    if (response.status !== 201) {
      throw new Error("Failed to create free board");
    }
    return response.data.data;
  };
