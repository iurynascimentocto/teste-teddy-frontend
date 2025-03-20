import { useTranslation } from "react-i18next";

import { ModalDefault } from "../../../../components/ModalDefault";
import { ButtonMain } from "../../../../components/Button";

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

  const handleDelete = () => {
    console.log("delete id:", id);
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
          onClick={handleDelete}
        />
      </BodyContainer>
    </ModalDefault>
  );
};
