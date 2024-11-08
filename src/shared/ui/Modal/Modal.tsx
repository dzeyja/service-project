import { classNames } from "shared/lib/classNames/classNames"
import cls from './Modal.module.scss'
import React, { ReactNode, useCallback, useEffect, useState } from "react"
import { Portal } from "../Portal/Portal"

interface ModalProps {
    children: ReactNode
    className?: string
    isOpen?: boolean
    onClose?: () => void
    lazy?: boolean
}

export function Modal(props: ModalProps) {
    const {
        isOpen,
        className,
        onClose,
        children,
        lazy
    } = props

    const [isMounted, setIsMounted] = useState(false)
    
    const handleClose = useCallback(() => {
        if(onClose) {
            onClose()
        }
    }, [onClose])
    
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if(e.key === 'Escape') {
            handleClose()
        }
    }, [handleClose])

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation()
    }

    useEffect(() => {
        if(isOpen) {
            window.addEventListener('keydown', handleKeyDown)
            setIsMounted(true)
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [isOpen, handleKeyDown])
    
    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen
    }

    if (lazy && !isMounted) {
        return null
    }
    
    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div onClick={handleClose} className={cls.overlay}>
                    <div onClick={handleClick} className={cls.content}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}
