import { useTranslation } from "react-i18next";

import AddIcon from "@mui/icons-material/Add";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";

import { IClient } from "../../types/client";

import { CardContainer, ActionContainer } from "./styles";

interface IProps {
  item: IClient;
  handleSelected?: (id: number) => void;
  handleEdit?: (id: number) => void;
  handleDelete?: (e: IClient) => void;
  handleRemoveSelected?: (e: IClient) => void;
}

export const CardList: React.FC<IProps> = ({
  item,
  handleSelected,
  handleEdit,
  handleDelete,
  handleRemoveSelected,
}) => {
  const { t } = useTranslation();

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
      .format(value)
      .trim();
  };

  return (
    <CardContainer>
      <h2>{item.name}</h2>

      <p>
        {t("card_label_salary")}: {formatCurrency(item.salary_price)}
      </p>

      <p>
        {t("card_label_company")}: {formatCurrency(item.company_price)}
      </p>

      <ActionContainer>
        {handleRemoveSelected && (
          <RemoveOutlinedIcon
            className="delete"
            onClick={() => {
              handleRemoveSelected(item);
            }}
          />
        )}

        {handleDelete && (
          <DeleteOutlinedIcon
            className="delete"
            onClick={() => {
              handleDelete(item);
            }}
          />
        )}

        {handleEdit && (
          <EditOutlinedIcon
            onClick={() => {
              handleEdit(item.id);
            }}
          />
        )}

        {handleSelected && (
          <AddIcon
            onClick={() => {
              handleSelected(item.id);
            }}
          />
        )}
      </ActionContainer>
    </CardContainer>
  );
};
