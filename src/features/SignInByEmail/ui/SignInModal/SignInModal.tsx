import { Modal } from "shared/ui/Modal/Modal"
import { Suspense } from "react"
import { LoginFormAsynk } from "../SignInForm/SignInFormAsync"

interface LoginModalProps {
    isOpen?: boolean
    onClose?: () => void
}

export function SignInModal(props: LoginModalProps) {
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
