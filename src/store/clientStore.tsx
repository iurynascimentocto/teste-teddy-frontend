import { create } from "zustand";

import { IClient } from "../types/client";

interface ClientState {
  totalItems: number;
  totalPages: number;
  clients: IClient[];
  setClients: (clients: IClient[]) => void;
  setTotalItems: (totalItems: number) => void;
  setTotalPages: (totalPages: number) => void;
}

export const useClientStore = create<ClientState>((set) => ({
  totalItems: 0,
  totalPages: 0,
  clients: [],
  setClients: (clients) => set({ clients }),
  setTotalItems: (totalItems) => set({ totalItems }),
  setTotalPages: (totalPages) => set({ totalPages }),
}));
