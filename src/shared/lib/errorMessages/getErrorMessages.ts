export const getErrorMessages = (code: string):string => {
    const messages: Record<string, string> = {
        "auth/email-already-in-use": "Этот email уже зарегистрирован.",
        "auth/weak-password": "Пароль слишком слабый.",
        "auth/invalid-email": "Неверный формат email.",
    };

    return messages[code] || "Неизвстная ошибка" 
}
