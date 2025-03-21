import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { CircularProgress, Pagination, PaginationItem } from "@mui/material";

import { IClient } from "../../types/client";

import { CardList } from "../../components/CardList";
import { ButtonMain } from "../../components/Button";
import { ModalRemoveSelectedClient } from "./components/ModalRemoveSelectedClient";
import { ModalRemoveAllSelectedClient } from "./components/ModalRemoveAllSelectedClient";
import { useSelectedClients } from "./hooks/useSelectedClients";

import {
  ContainerPage,
  CardListContainer,
  InfoPage,
  QtdFoundPerPage,
  PageContainer,
  LoadingContainer,
} from "./styles";

export const SelectedClientPage = () => {
  const { t } = useTranslation();

  const [page, setPage] = useState<number>(1);
  const { selectedClients, fetchSelectedClients, loading, totalPages } =
    useSelectedClients(page, Number(16));

  const [itemRemove, setItemRemove] = useState<IClient>();
  const [openModalRemoveClient, setOpenModalRemoveClient] =
    useState<boolean>(false);

  const [openModalRemoveAllClient, setOpenModalRemoveAllClient] =
    useState<boolean>(false);

  /**
   * Open Modal Remove Client
   * @param id client_id
   */
  const handleRemoveSelected = (item: IClient) => {
    setItemRemove(item);
    setOpenModalRemoveClient(true);
  };

  /**
   * Close Modal Remove Client
   */
  const onCloseModalRemoveClient = () => {
    setOpenModalRemoveClient(false);
    setItemRemove(undefined);
  };

  /**
   * Get Data Selected Clients
   */
  useEffect(() => {
    fetchSelectedClients();
    // eslint-disable-next-line
  }, [page]);

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
       * Modal Remove Selected Client
       */}
      <ModalRemoveSelectedClient
        id={itemRemove?.id}
        clientName={itemRemove?.name}
        isOpen={openModalRemoveClient}
        onClose={onCloseModalRemoveClient}
      />

      {/**
       * Modal Remove All Selected Client
       */}
      <ModalRemoveAllSelectedClient
        isOpen={openModalRemoveAllClient}
        onClose={() => {
          setOpenModalRemoveAllClient(false);
        }}
      />

      {/**
       * Total found and quantity of items per page
       */}
      <InfoPage>
        <QtdFoundPerPage>
          <span>{t("page_selected_clients_title")}:</span>
        </QtdFoundPerPage>
      </InfoPage>

      {/**
       * List
       */}
      <CardListContainer>
        {selectedClients.map((item) => (
          <CardList
            item={item}
            key={item.id}
            handleRemoveSelected={handleRemoveSelected}
          />
        ))}
      </CardListContainer>

      {selectedClients.length === 0 && (
        <p>{t("page_selected_clients_empty")}</p>
      )}

      {/**
       * Action button clear all selected clients
       */}
      {selectedClients.length > 0 && (
        <ButtonMain
          label={t("selected_clients_btn_clear")}
          outline
          onClick={() => {
            setOpenModalRemoveAllClient(true);
          }}
        />
      )}

      {/**
       * Pagination List
       */}
      <PageContainer>
        <Pagination
          count={totalPages}
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
