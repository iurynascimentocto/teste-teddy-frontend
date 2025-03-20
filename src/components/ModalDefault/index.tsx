import { Modal } from "@mui/material";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";

import { ModalContainer, TitleContainer, BodyContainer } from "./styles";

interface IProps {
  isOpen?: boolean;
  title?: string;
  onClose?: () => void;
  children?: React.ReactNode;
}

export const ModalDefault: React.FC<IProps> = ({
  isOpen,
  title,
  onClose,
  children,
}) => {
  return (
    <Modal open={isOpen ?? false} onClose={onClose}>
      <ModalContainer>
        <TitleContainer>
          <h2>{title}</h2>
          <ClearOutlinedIcon onClick={onClose} />
        </TitleContainer>

        <BodyContainer>{children}</BodyContainer>
      </ModalContainer>
    </Modal>
  );
};
