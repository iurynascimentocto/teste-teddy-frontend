import { useEffect, useState } from "react";

import { clientService } from "../../../services/clientService";
import { useClientStore } from "../../../store/clientStore";

import { IClientCreate, IClientEdit } from "../../../types/client";

export const useClients = (page = 1, limit = 16) => {
  const { clients, setClients } = useClientStore();
  const [loading, setLoading] = useState(false);

  const fetchClients = async () => {
    setLoading(true);

    try {
      const data = await clientService.getAll({ page, limit });
      setClients(data.clients);
    } catch (error) {
      console.error("Erro ao buscar clientes:", error);
    } finally {
      setLoading(false);
    }
  };

  const createClient = async (clientData: IClientCreate) => {
    setLoading(true);
    try {
      const newClient = await clientService.create(clientData);
      setClients([...clients, newClient]);
    } catch (error) {
      console.error("Erro ao criar cliente:", error);
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
    } catch (error) {
      console.error("Erro ao atualizar cliente:", error);
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
    } catch (error) {
      console.error("Erro ao excluir cliente:", error);
    } finally {
      setLoading(false);
      fetchClients();
    }
  };

  useEffect(() => {
    fetchClients();
    // eslint-disable-next-line
  }, [page, limit]);

  return {
    clients,
    loading,
    fetchClients,
    createClient,
    updateClient,
    deleteClient,
  };
};
