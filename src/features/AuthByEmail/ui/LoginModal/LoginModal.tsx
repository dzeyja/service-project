import { Suspense } from "react"
import { Modal } from "shared/ui/Modal/Modal"
import { LoginFormAsynk } from "../LoginForm/LoginFormAsynk"

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
            <Suspense fallback="Loading...">
                <LoginFormAsynk />
            </Suspense>
        </Modal>
    )
}
