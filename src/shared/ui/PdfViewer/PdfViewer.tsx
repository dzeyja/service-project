import React, { useState } from "react";
import { Button, ButtonSize, ButtonTheme } from "../Button/Button";

export const PdfUploaderDownloader = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isFileUploaded, setIsFileUploaded] = useState(false); // Состояние для отслеживания загрузки

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const uploadedFile = event.target.files[0];
      if (uploadedFile.type === "application/pdf") {
        setFile(uploadedFile);
        setIsFileUploaded(true); // Обновляем состояние, когда файл загружен
        alert("Файл загружен!");
      } else {
        alert("Пожалуйста, загрузите PDF-файл.");
      }
    }
  };

  const handleFileDownload = () => {
    if (file) {
      const url = URL.createObjectURL(file);
      const link = document.createElement("a");
      link.href = url;
      link.download = file.name;
      link.click();
      URL.revokeObjectURL(url); // Очистка URL после скачивания
    } else {
      alert("Сначала загрузите файл!");
    }
  };

  return (
    <div>
      {/* Поле загрузки (скрыто после загрузки файла) */}
      {!isFileUploaded && (
          <div>
            <h1>Загрузка и скачивание PDF</h1>
          <input type="file" accept="application/pdf" onChange={handleFileUpload} />
        </div>
      )}
      <br />
      <br />
      {/* Кнопка для скачивания */}
      <Button square size={ButtonSize.M} theme={ButtonTheme.RED} onClick={handleFileDownload} disabled={!file}>
        Скачать прайс-лист
      </Button>
      {/* Информация о загруженном файле */}
    </div>
  );
};
