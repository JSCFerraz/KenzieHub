import { TechForm } from "../Form/TechForm";
// import { useContext, useEffect, useRef } from "react";
import { Modal, ModalBox, StyledTechTitle } from "./style";
import { Button } from "../Button";
import { StyledText } from "../../styles/typography";
// import { TechContext } from "../../contexts/TechContext";
import { TechFormDetails } from "../Form/TechFormDetails";
import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";

export const TechModal = ({ techAction }) => {
    const { actionOverTech } = useContext(TechContext)

    return actionOverTech === "create" ? (
        <Modal>
            <ModalBox>
                <Button type="closeModal" buttonStyle="icon">X</Button>
                <StyledTechTitle>
                    <StyledText tag="h3" textStyle="title2">
                        Cadastrar Tecnologia
                    </StyledText>
                </StyledTechTitle>
                <TechForm />
            </ModalBox>
        </Modal >
    ) : (
        <Modal>
            <ModalBox>
                <Button type="closeModal" buttonStyle="icon">X</Button>
                <StyledTechTitle>
                    <StyledText tag="h3" textStyle="title2">
                        Tecnologia Detalhes
                    </StyledText>
                </StyledTechTitle>
                <TechFormDetails techId={actionOverTech} />
            </ModalBox>
        </Modal >
    )
}