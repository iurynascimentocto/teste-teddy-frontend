import { useState } from "react";
import { useTranslation } from "react-i18next";
import { MenuItem, Pagination, PaginationItem } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { IClient } from "../../types/client";

import { CardList } from "../../components/CardList";
import { ButtonMain } from "../../components/Button";
import { ModalCreateClient } from "./components/ModalCreateClient";
import { ModalDeleteClient } from "./components/ModalDeleteClient";

import {
  ContainerPage,
  CardListContainer,
  InfoPage,
  QtdFoundPerPage,
  ClientPerPage,
  PageContainer,
} from "./styles";

const optionsPerPage = [4, 8, 16, 32, 50, 100];

export const ClientPage = () => {
  const { t } = useTranslation();

  const [idEdit, setIdEdit] = useState<number>();
  const [itemDelete, setItemDelete] = useState<IClient>();

  const [openModalCreateClient, setOpenModalCreateClient] =
    useState<boolean>(false);
  const [openModalDeleteClient, setOpenModalDeleteClient] =
    useState<boolean>(false);

  const [perPage, setPerPage] = useState("16");

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

  const data: IClient[] = [
    {
      id: 1,
      name: "Marcos Oliveira",
      salary_price: 4500.0,
      company_price: 10000.0,
      created_at: "2025-03-18T03:13:03.192Z",
      updated_at: "2025-03-18T03:13:03.192Z",
    },
    {
      id: 2,
      name: "Jose Silva",
      salary_price: 2542.0,
      company_price: 3425.0,
      created_at: "2025-03-18T03:13:03.192Z",
      updated_at: "2025-03-18T03:13:03.192Z",
    },
    {
      id: 3,
      name: "Pedro Manso",
      salary_price: 3953.0,
      company_price: 4523.55,
      created_at: "2025-03-18T03:13:03.192Z",
      updated_at: "2025-03-18T03:13:03.192Z",
    },
    {
      id: 4,
      name: "Maria do Carmo",
      salary_price: 1343.0,
      company_price: 1974.0,
      created_at: "2025-03-18T03:13:03.192Z",
      updated_at: "2025-03-18T03:13:03.192Z",
    },
    {
      id: 5,
      name: "Enzo Guiralhões",
      salary_price: 4353.0,
      company_price: 8345.0,
      created_at: "2025-03-18T03:13:03.192Z",
      updated_at: "2025-03-18T03:13:03.192Z",
    },
    {
      id: 6,
      name: "Enzo Guiralhões",
      salary_price: 4353.0,
      company_price: 8345.0,
      created_at: "2025-03-18T03:13:03.192Z",
      updated_at: "2025-03-18T03:13:03.192Z",
    },
    {
      id: 1,
      name: "Marcos Oliveira",
      salary_price: 4500.0,
      company_price: 10000.0,
      created_at: "2025-03-18T03:13:03.192Z",
      updated_at: "2025-03-18T03:13:03.192Z",
    },
    {
      id: 2,
      name: "Jose Silva",
      salary_price: 2542.0,
      company_price: 3425.0,
      created_at: "2025-03-18T03:13:03.192Z",
      updated_at: "2025-03-18T03:13:03.192Z",
    },
    {
      id: 3,
      name: "Pedro Manso",
      salary_price: 3953.0,
      company_price: 4523.55,
      created_at: "2025-03-18T03:13:03.192Z",
      updated_at: "2025-03-18T03:13:03.192Z",
    },
    {
      id: 4,
      name: "Maria do Carmo",
      salary_price: 1343.0,
      company_price: 1974.0,
      created_at: "2025-03-18T03:13:03.192Z",
      updated_at: "2025-03-18T03:13:03.192Z",
    },
    {
      id: 5,
      name: "Enzo Guiralhões",
      salary_price: 4353.0,
      company_price: 8345.0,
      created_at: "2025-03-18T03:13:03.192Z",
      updated_at: "2025-03-18T03:13:03.192Z",
    },
    {
      id: 6,
      name: "Enzo Guiralhões",
      salary_price: 4353.0,
      company_price: 8345.0,
      created_at: "2025-03-18T03:13:03.192Z",
      updated_at: "2025-03-18T03:13:03.192Z",
    },
    {
      id: 1,
      name: "Marcos Oliveira",
      salary_price: 4500.0,
      company_price: 10000.0,
      created_at: "2025-03-18T03:13:03.192Z",
      updated_at: "2025-03-18T03:13:03.192Z",
    },
    {
      id: 2,
      name: "Jose Silva",
      salary_price: 2542.0,
      company_price: 3425.0,
      created_at: "2025-03-18T03:13:03.192Z",
      updated_at: "2025-03-18T03:13:03.192Z",
    },
    {
      id: 3,
      name: "Pedro Manso",
      salary_price: 3953.0,
      company_price: 4523.55,
      created_at: "2025-03-18T03:13:03.192Z",
      updated_at: "2025-03-18T03:13:03.192Z",
    },
    {
      id: 4,
      name: "Maria do Carmo",
      salary_price: 1343.0,
      company_price: 1974.0,
      created_at: "2025-03-18T03:13:03.192Z",
      updated_at: "2025-03-18T03:13:03.192Z",
    },
  ];

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
          <strong>{data.length}</strong>{" "}
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
        {data.map((item) => (
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
          page={5}
          hidePrevButton
          hideNextButton
          renderItem={(item) => <PaginationItem {...item} />}
        />
      </PageContainer>
    </ContainerPage>
  );
};
