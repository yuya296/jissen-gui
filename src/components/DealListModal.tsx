import { Children } from "react";
import { Modal as BootstrapModal, Button } from "react-bootstrap";
import Deal from "../types/Deal";
import { Issue } from "../types/Issue";
import DealList from "./DealList";

type ModalProps = {
    code: string;
    deals: Deal[];
    issues: Issue[];
    show: boolean;
    onHide: () => void;
    del: (id:string) => void;
}

export const DealListModal = ({ code, deals, issues, show, onHide, del}: ModalProps) => {
    return (
        <BootstrapModal show={show} onHide={onHide}>

            <BootstrapModal.Header closeButton>
                <BootstrapModal.Title>
                    {`[${code}] ${issues.find(el => el.code === code)?.name ?? "error"}`}
                </BootstrapModal.Title>
            </BootstrapModal.Header>

            <BootstrapModal.Body>
                <DealList deals={deals} del={del} />
            </BootstrapModal.Body>

            <BootstrapModal.Footer>
                <Button variant="secondary" onClick={onHide}>閉じる</Button>
            </BootstrapModal.Footer>

        </BootstrapModal>
    )
}