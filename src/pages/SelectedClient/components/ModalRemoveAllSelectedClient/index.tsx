import { useTranslation } from "react-i18next";

import { ModalDefault } from "../../../../components/ModalDefault";
import { ButtonMain } from "../../../../components/Button";

import { useSelectedClients } from "../../hooks/useSelectedClients";

import { BodyContainer } from "./styles";

interface IProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const ModalRemoveAllSelectedClient: React.FC<IProps> = ({
  isOpen,
  onClose,
}) => {
  const { t } = useTranslation();

  const { removeAllSelectedClient, loading } = useSelectedClients();

  const handleRemove = async () => {
    await removeAllSelectedClient();
    if (onClose) onClose();
  };

  return (
    <ModalDefault
      isOpen={isOpen}
      title={`${t("selected_clients_btn_clear")}:`}
      onClose={onClose}
    >
      <BodyContainer>
        <p>{t("selected_client_modal_removeall_description")}</p>

        <ButtonMain
          label={t("selected_clients_btn_clear")}
          disabled={loading}
          onClick={handleRemove}
        />
      </BodyContainer>
    </ModalDefault>
  );
};
