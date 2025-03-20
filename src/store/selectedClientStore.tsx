import { create } from "zustand";

import { IClient } from "../types/client";

interface SelectedClientState {
  totalItems: number;
  totalPages: number;
  selectedClients: IClient[];
  setSelectedClients: (selectedClients: IClient[]) => void;
  setTotalItems: (totalItems: number) => void;
  setTotalPages: (totalPages: number) => void;
}

export const useSelectedClientStore = create<SelectedClientState>((set) => ({
  totalItems: 0,
  totalPages: 0,
  selectedClients: [],
  setSelectedClients: (selectedClients) => set({ selectedClients }),
  setTotalItems: (totalItems) => set({ totalItems }),
  setTotalPages: (totalPages) => set({ totalPages }),
}));
