import { useTranslation } from "react-i18next";
import { Pagination, PaginationItem } from "@mui/material";

import { IClient } from "../../types/client";

import { CardList } from "../../components/CardList";
import { ButtonMain } from "../../components/Button";

import {
  ContainerPage,
  CardListContainer,
  InfoPage,
  QtdFoundPerPage,
  ClientPerPage,
  PageContainer,
} from "./styles";

export const ClientPage = () => {
  const { t } = useTranslation();

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
    }
  ];

  return (
    <ContainerPage>
      <InfoPage>
        <QtdFoundPerPage>
          <strong>{data.length}</strong>{" "}
          <span>{t("client_clients_found")}:</span>
        </QtdFoundPerPage>

        <ClientPerPage>
          <span>{t("client_per_page")}:</span>
        </ClientPerPage>
      </InfoPage>

      <CardListContainer>
        {data.map((item) => (
          <CardList item={item} key={item.id} />
        ))}
      </CardListContainer>

      <ButtonMain
        label={t("client_btn_create_client")}
        outline
        onClick={() => {}}
      />

      <PageContainer>
        <Pagination
          count={10}
          renderItem={(item) => (
            <PaginationItem
              // slots={{ previous: <> </>, next: <> </> }}
              {...item}
            />
          )}
        />
      </PageContainer>
    </ContainerPage>
  );
};
