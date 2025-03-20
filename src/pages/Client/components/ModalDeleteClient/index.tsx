import { useTranslation } from "react-i18next";

import { ModalDefault } from "../../../../components/ModalDefault";
import { ButtonMain } from "../../../../components/Button";

import { useClients } from "../../hooks/useClients";

import { BodyContainer } from "./styles";

interface IProps {
  id?: number;
  clientName?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export const ModalDeleteClient: React.FC<IProps> = ({
  id,
  clientName,
  isOpen,
  onClose,
}) => {
  const { t } = useTranslation();

  const { deleteClient, loading } = useClients();

  const handleDelete = async () => {
    if (id) {
      await deleteClient(id);
      if (onClose) onClose();
    }
  };

  return (
    <ModalDefault
      isOpen={isOpen}
      title={`${t("client_btn_delete_client")}:`}
      onClose={onClose}
    >
      <BodyContainer>
        <p>
          {t("client_modal_delete_description")}: <strong>{clientName}</strong>
        </p>

        <ButtonMain
          label={t("client_btn_delete_client")}
          disabled={loading}
          onClick={handleDelete}
        />
      </BodyContainer>
    </ModalDefault>
  );
};
