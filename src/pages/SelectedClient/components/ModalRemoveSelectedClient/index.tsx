import { useTranslation } from "react-i18next";

import { ModalDefault } from "../../../../components/ModalDefault";
import { ButtonMain } from "../../../../components/Button";

import { useSelectedClients } from "../../hooks/useSelectedClients";

import { BodyContainer } from "./styles";

interface IProps {
  id?: number;
  clientName?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export const ModalRemoveSelectedClient: React.FC<IProps> = ({
  id,
  clientName,
  isOpen,
  onClose,
}) => {
  const { t } = useTranslation();

  const { createOrRemoveSelectedClient, loading } = useSelectedClients();

  const handleDelete = async () => {
    if (id) {
      await createOrRemoveSelectedClient(id);
      if (onClose) onClose();
    }
  };

  return (
    <ModalDefault
      isOpen={isOpen}
      title={`${t("selected_client_btn_remove")}:`}
      onClose={onClose}
    >
      <BodyContainer>
        <p>
          {t("selected_client_modal_remove_description")}:{" "}
          <strong>{clientName}</strong>
        </p>

        <ButtonMain
          label={t("selected_client_btn_remove")}
          disabled={loading}
          onClick={handleDelete}
        />
      </BodyContainer>
    </ModalDefault>
  );
};
