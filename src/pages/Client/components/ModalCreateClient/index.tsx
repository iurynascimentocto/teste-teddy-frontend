import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";

import { ModalDefault } from "../../../../components/ModalDefault";
import { InputMain } from "../../../../components/Input";
import { ButtonMain } from "../../../../components/Button";

import { IClientCreate, IClientEdit } from "../../../../types/client";
import { useClients } from "../../hooks/useClients";

import { clientSchema } from "./validationSchema";

import { BodyContainer, FormContainer } from "./styles";
import { useEffect } from "react";

interface IProps {
  idEdit?: number;
  isOpen?: boolean;
  onClose?: () => void;
}

export interface ICreate {
  name: string;
  salary_price: string;
  company_price: string;
}

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const parseCurrency = (value: string) => {
  return Number(
    value.replace(/\./g, "").replace(",", ".").replace("R$", "").trim()
  );
};

export const ModalCreateClient: React.FC<IProps> = ({
  idEdit,
  isOpen,
  onClose,
}) => {
  const { t } = useTranslation();

  const { clients, createClient, updateClient, loading } = useClients();

  const {
    control,
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(clientSchema),
    defaultValues: {
      name: "",
      salary_price: "",
      company_price: "",
    },
  });

  const salary_price = watch("salary_price");
  const company_price = watch("company_price");

  const handleSalaryPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, "");
    const numericValue = Number(rawValue) / 100;
    setValue("salary_price", currencyFormatter.format(numericValue), {
      shouldValidate: true,
    });
  };

  const handleCompanyPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, "");
    const numericValue = Number(rawValue) / 100;
    setValue("company_price", currencyFormatter.format(numericValue), {
      shouldValidate: true,
    });
  };

  const onSubmit = async (payload: ICreate) => {
    if (idEdit) {
      const send: IClientEdit = {
        id: idEdit,
        name: payload.name,
        salary_price: parseCurrency(payload.salary_price),
        company_price: parseCurrency(payload.company_price),
      };

      await updateClient(send.id, send);
      if (onClose) onClose();
    } else {
      const send: IClientCreate = {
        name: payload.name,
        salary_price: parseCurrency(payload.salary_price),
        company_price: parseCurrency(payload.company_price),
      };

      await createClient(send);
      if (onClose) onClose();
    }
  };

  /**
   * Get Data Edit
   */
  useEffect(() => {
    if (idEdit && clients.length > 0) {
      const found = clients.find((e) => e.id === idEdit);
      if (found?.id) {
        setValue("name", found.name);
        setValue(
          "salary_price",
          currencyFormatter.format(Number(found.salary_price)),
          {
            shouldValidate: true,
          }
        );
        setValue(
          "company_price",
          currencyFormatter.format(Number(found.company_price)),
          {
            shouldValidate: true,
          }
        );
      }
    } else {
      setValue("name", "");
      setValue("salary_price", "");
      setValue("company_price", "");
    }
    // eslint-disable-next-line
  }, [idEdit]);

  return (
    <ModalDefault
      isOpen={isOpen}
      title={`${idEdit ? t("client_btn_edit_client") : t("client_btn_create_client")}:`}
      onClose={onClose}
    >
      <BodyContainer onSubmit={handleSubmit(onSubmit)}>
        <FormContainer>
          <div>
            <InputMain
              type="text"
              {...register("name")}
              placeholder={`${t("client_input_label_name")}:`}
            />
            {errors.name && <p>{errors.name.message}</p>}
          </div>

          <div>
            <Controller
              name="salary_price"
              control={control}
              render={({ field }) => (
                <InputMain
                  {...field}
                  value={salary_price}
                  onChange={handleSalaryPriceChange}
                  placeholder={`${t("client_input_label_salary")}:`}
                />
              )}
            />
            {errors.salary_price && <p>{errors.salary_price.message}</p>}
          </div>

          <div>
            <Controller
              name="company_price"
              control={control}
              render={({ field }) => (
                <InputMain
                  {...field}
                  value={company_price}
                  onChange={handleCompanyPriceChange}
                  placeholder={`${t("client_input_label_company")}:`}
                />
              )}
            />
            {errors.company_price && <p>{errors.company_price.message}</p>}
          </div>
        </FormContainer>

        <ButtonMain
          type="submit"
          disabled={loading}
          label={
            idEdit ? t("client_btn_edit_client") : t("client_btn_create_client")
          }
        />
      </BodyContainer>
    </ModalDefault>
  );
};
