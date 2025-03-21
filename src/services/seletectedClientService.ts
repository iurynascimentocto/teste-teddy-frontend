import { api } from "./api";

import { IClient, IClientResponse } from "../types/client";

export const selectedClientService = {
  getAll: async ({ page = 1, limit = 16 }): Promise<IClientResponse> => {
    const response = await api.get(
      `/selected-clients?page=${page}&limit=${limit}`
    );
    return response.data;
  },

  create: async (clientId: number): Promise<IClient> => {
    const response = await api.post(`/selected-clients/${clientId}`, {});
    return response.data;
  },

  remove: async (clientId: number) => {
    await api.delete(`/selected-clients/${clientId}`);
  },

  removeAll: async () => {
    await api.delete(`/selected-clients`);
  },
};
