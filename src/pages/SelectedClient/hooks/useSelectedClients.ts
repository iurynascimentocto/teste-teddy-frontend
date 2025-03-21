import { useState } from "react";
import { toast } from "react-toastify";

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
      toast.error("Erro ao buscar cliente selecionado");
    } finally {
      setLoading(false);
    }
  };

  const createSelectedClient = async (clientId: number) => {
    setLoading(true);
    try {
      await selectedClientService.create(clientId);
      toast.success("Adicionado com sucesso");
    } catch (error) {
      console.error("Erro ao add cliente selecionado:", error);
      toast.error("Erro ao adicionar cliente selecionado");
    } finally {
      setLoading(false);
      fetchSelectedClients();
    }
  };

  const removeSelectedClient = async (clientId: number) => {
    setLoading(true);
    try {
      await selectedClientService.remove(clientId);
      toast.success("Removido com sucesso");
    } catch (error) {
      console.error("Erro ao remover cliente selecionado:", error);
      toast.error("Erro ao remover cliente selecionado");
    } finally {
      setLoading(false);
      fetchSelectedClients();
    }
  };

  const removeAllSelectedClient = async () => {
    setLoading(true);
    try {
      await selectedClientService.removeAll();
      toast.success("Removido todos com sucesso");
    } catch (error) {
      console.error("Erro ao remover todos clientes selecionados:", error);
      toast.error("Erro ao remover todos clientes selecionados");
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
    createSelectedClient,
    removeSelectedClient,
    removeAllSelectedClient,
  };
};
