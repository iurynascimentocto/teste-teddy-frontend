import { useTranslation } from "react-i18next";

import { ModalDefault } from "../../../../components/ModalDefault";
import { InputMain } from "../../../../components/Input";
import { ButtonMain } from "../../../../components/Button";

import { BodyContainer, FormContainer } from "./styles";

interface IProps {
  idEdit?: number;
  isOpen?: boolean;
  onClose?: () => void;
}

export const ModalCreateClient: React.FC<IProps> = ({
  idEdit,
  isOpen,
  onClose,
}) => {
  const { t } = useTranslation();

  return (
    <ModalDefault
      isOpen={isOpen}
      title={`${idEdit ? t("client_btn_edit_client") : t("client_btn_create_client")}:`}
      onClose={onClose}
    >
      <BodyContainer>
        <FormContainer>
          <InputMain
            type="text"
            // value={name}
            // onChange={(e) => setName(e.target.value)}
            placeholder={`${t("client_input_label_name")}:`}
          />

          <InputMain
            type="text"
            // value={name}
            // onChange={(e) => setName(e.target.value)}
            placeholder={`${t("client_input_label_salary")}:`}
          />

          <InputMain
            type="text"
            // value={name}
            // onChange={(e) => setName(e.target.value)}
            placeholder={`${t("client_input_label_company")}:`}
          />
        </FormContainer>

        <ButtonMain
          label={
            idEdit ? t("client_btn_edit_client") : t("client_btn_create_client")
          }
          onClick={() => {}}
        />
      </BodyContainer>
    </ModalDefault>
  );
};
