import { useState } from "react";
import { toast } from "react-toastify";

import { clientService } from "../../../services/clientService";
import { useClientStore } from "../../../store/clientStore";

import { IClientCreate, IClientEdit } from "../../../types/client";

export const useClients = (page = 1, limit = 16) => {
  const {
    clients,
    totalItems,
    totalPages,
    setClients,
    setTotalItems,
    setTotalPages,
  } = useClientStore();

  const [loading, setLoading] = useState(false);

  const fetchClients = async () => {
    setLoading(true);

    try {
      const data = await clientService.getAll({ page, limit });
      setClients(data.data);
      setTotalItems(data.totalItems);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Erro ao buscar clientes:", error);
      toast.error("Erro ao buscar clientes");
    } finally {
      setLoading(false);
    }
  };

  const createClient = async (clientData: IClientCreate) => {
    setLoading(true);
    try {
      const newClient = await clientService.create(clientData);
      setClients([...clients, newClient]);

      toast.success("Salvo com sucesso");
    } catch (error) {
      console.error("Erro ao criar cliente:", error);
      toast.error("Erro ao criar cliente");
    } finally {
      setLoading(false);
      fetchClients();
    }
  };

  const updateClient = async (id: number, clientData: IClientEdit) => {
    setLoading(true);
    try {
      const updatedClient = await clientService.update(id, clientData);
      setClients(
        clients.map((client) => (client.id === id ? updatedClient : client))
      );

      toast.success("Salvo com sucesso");
    } catch (error) {
      console.error("Erro ao atualizar cliente:", error);
      toast.error("Erro ao atualizar cliente");
    } finally {
      setLoading(false);
      fetchClients();
    }
  };

  const deleteClient = async (id: number) => {
    setLoading(true);
    try {
      await clientService.delete(id);
      setClients(clients.filter((client) => client.id !== id));

      toast.success("Excluido com sucesso");
    } catch (error) {
      console.error("Erro ao excluir cliente:", error);
      toast.error("Erro ao excluir cliente");
    } finally {
      setLoading(false);
      fetchClients();
    }
  };

  return {
    clients,
    totalItems,
    totalPages,
    loading,
    fetchClients,
    createClient,
    updateClient,
    deleteClient,
  };
};
