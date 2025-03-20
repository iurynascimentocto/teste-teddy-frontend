import { useState } from "react";

import { useSelectedClientStore } from "../../../store/selectedClientStore";
import { selectedClientService } from "../../../services/seletectedClientService";

export const useSelectedClients = (page = 1, limit = 16) => {
  const {
    selectedClients,
    totalItems,
    totalPages,
    setSelectedClients,
    setTotalItems,
    setTotalPages,
  } = useSelectedClientStore();

  const [loading, setLoading] = useState(false);

  const fetchSelectedClients = async () => {
    setLoading(true);

    try {
      const data = await selectedClientService.getAll({ page, limit });
      setSelectedClients(data.data);
      setTotalItems(data.totalItems);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Erro ao buscar clientes selecionados:", error);
    } finally {
      setLoading(false);
    }
  };

  const createOrRemoveSelectedClient = async (clientId: number) => {
    setLoading(true);
    try {
      await selectedClientService.createOrRemove(clientId);
    } catch (error) {
      console.error("Erro ao remover / add cliente selecionado:", error);
    } finally {
      setLoading(false);
      fetchSelectedClients();
    }
  };

  return {
    selectedClients,
    totalItems,
    totalPages,
    loading,
    fetchSelectedClients,
    createOrRemoveSelectedClient,
  };
};
