import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  CircularProgress,
  MenuItem,
  Pagination,
  PaginationItem,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { IClient } from "../../types/client";

import { CardList } from "../../components/CardList";
import { ButtonMain } from "../../components/Button";
import { ModalCreateClient } from "./components/ModalCreateClient";
import { ModalDeleteClient } from "./components/ModalDeleteClient";
import { useClients } from "./hooks/useClients";

import {
  ContainerPage,
  CardListContainer,
  InfoPage,
  QtdFoundPerPage,
  ClientPerPage,
  PageContainer,
  LoadingContainer,
} from "./styles";

const optionsPerPage = [4, 8, 16, 32, 50, 100];

export const ClientPage = () => {
  const { t } = useTranslation();

  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState("16");
  const { clients, loading } = useClients(page, Number(perPage));

  const [idEdit, setIdEdit] = useState<number>();
  const [itemDelete, setItemDelete] = useState<IClient>();

  const [openModalCreateClient, setOpenModalCreateClient] =
    useState<boolean>(false);
  const [openModalDeleteClient, setOpenModalDeleteClient] =
    useState<boolean>(false);

  const handlePerPage = (event: SelectChangeEvent) => {
    setPerPage(event.target.value as string);
  };

  /**
   * Client Selected to save api
   * @param id client_id
   */
  const handleSelected = (id: number) => {
    console.log("TODO: Enpoint de client selecionado:", id);
  };

  /**
   * Open Modal edit Client
   * @param id client_id
   */
  const handleEdit = (id: number) => {
    setIdEdit(id);
    setOpenModalCreateClient(true);
  };

  /**
   * Close Modal Create / Edit Client
   */
  const onCloseModalCreateClient = () => {
    setOpenModalCreateClient(false);
    setIdEdit(undefined);
  };

  /**
   * Open Modal delete Client
   * @param id client_id
   */
  const handleDelete = (item: IClient) => {
    setItemDelete(item);
    setOpenModalDeleteClient(true);
  };

  /**
   * Close Modal Delete Client
   */
  const onCloseModalDeleteClient = () => {
    setOpenModalDeleteClient(false);
    setItemDelete(undefined);
  };

  if (loading) {
    return (
      <LoadingContainer>
        <CircularProgress />
      </LoadingContainer>
    );
  }

  return (
    <ContainerPage>
      {/**
       * Modal Create New Client
       */}
      <ModalCreateClient
        idEdit={idEdit}
        isOpen={openModalCreateClient}
        onClose={onCloseModalCreateClient}
      />

      {/**
       * Modal Delete Client
       */}
      <ModalDeleteClient
        id={itemDelete?.id}
        clientName={itemDelete?.name}
        isOpen={openModalDeleteClient}
        onClose={onCloseModalDeleteClient}
      />

      {/**
       * Total found and quantity of items per page
       */}
      <InfoPage>
        <QtdFoundPerPage>
          <strong>{clients.length}</strong>{" "}
          <span>{t("client_clients_found")}:</span>
        </QtdFoundPerPage>

        <ClientPerPage>
          <span>{t("client_per_page")}:</span>
          <Select value={perPage} onChange={handlePerPage}>
            {optionsPerPage.map((e, i) => (
              <MenuItem key={i} value={e}>
                {e}
              </MenuItem>
            ))}
          </Select>
        </ClientPerPage>
      </InfoPage>

      {/**
       * List
       */}
      <CardListContainer>
        {clients.map((item) => (
          <CardList
            item={item}
            key={item.id}
            handleSelected={handleSelected}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        ))}
      </CardListContainer>

      {/**
       * Action button new client
       */}
      <ButtonMain
        label={t("client_btn_create_client")}
        outline
        onClick={() => {
          setOpenModalCreateClient(true);
        }}
      />

      {/**
       * Pagination List
       */}
      <PageContainer>
        <Pagination
          count={10}
          page={page}
          hidePrevButton
          hideNextButton
          renderItem={(item) => <PaginationItem {...item} />}
          onChange={(_, p) => {
            setPage(p);
          }}
        />
      </PageContainer>
    </ContainerPage>
  );
};
