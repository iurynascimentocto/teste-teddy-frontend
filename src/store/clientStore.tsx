import { create } from "zustand";

import { IClient } from "../types/client";

interface ClientState {
  clients: IClient[];
  setClients: (clients: IClient[]) => void;
}

export const useClientStore = create<ClientState>((set) => ({
  clients: [],
  setClients: (clients) => set({ clients }),
}));
