import { api } from "./api";

import {
  IClient,
  IClientCreate,
  IClientEdit,
  IClientResponse,
} from "../types/client";

export const clientService = {
  getAll: async ({ page = 1, limit = 16 }): Promise<IClientResponse> => {
    const response = await api.get(`/clients?page=${page}&limit=${limit}`);
    return response.data;
  },

  create: async (data: IClientCreate): Promise<IClient> => {
    const response = await api.post("/clients", data);
    return response.data;
  },

  update: async (id: number, data: IClientEdit): Promise<IClient> => {
    const response = await api.patch(`/clients/${id}`, data);
    return response.data;
  },

  delete: async (id: number) => {
    await api.delete(`/clients/${id}`);
  },
};
