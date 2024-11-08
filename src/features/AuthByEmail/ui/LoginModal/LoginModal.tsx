import { ReactNode } from "react"
import { Modal } from "shared/ui/Modal/Modal"
import { LoginForm } from "../LoginForm/LoginForm"

interface LoginModalProps {
    isOpen?: boolean
    onClose?: () => void
}

export function LoginModal(props: LoginModalProps) {
    const {
        isOpen,
        onClose,
    } = props

    return (
        <Modal 
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <LoginForm />
        </Modal>
    )
}
