import { classNames } from "shared/lib/classNames/classNames"
import cls from './OrderModal.module.scss'
import { Modal } from "shared/ui/Modal/Modal"
import { FormOrder } from "./FormOrder"

interface OrderModalProps {
    className?: string,
    isOpen: boolean,
    onClose: () => void 
}

export const OrderModal = (props: OrderModalProps) => {
    const {
        isOpen,
        onClose,
        className
    } = props

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <FormOrder />
        </Modal>
    )
}
