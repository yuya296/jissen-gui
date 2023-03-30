import { Children } from "react";
import { Modal as BootstrapModal, Button } from "react-bootstrap";

type ModalProps = {
    show: boolean;
    onHide: ()=>void;
    title: string;
    formId: string;
    children?: JSX.Element;
}

export const Modal = ({show, onHide, title, formId, children}:ModalProps) => {
    return (

        <BootstrapModal show={show} onHide={onHide}>

            <BootstrapModal.Header closeButton>
                <BootstrapModal.Title>
                    {title}
                </BootstrapModal.Title>
            </BootstrapModal.Header>

            <BootstrapModal.Body>
                {children}
            </BootstrapModal.Body>

            <BootstrapModal.Footer>
                <Button variant="secondary" onClick={onHide}>キャンセル</Button>
                <Button type="submit" form={formId} variant={"primary"} onClick={onHide} >追加</Button>
            </BootstrapModal.Footer>

        </BootstrapModal>
    )
}