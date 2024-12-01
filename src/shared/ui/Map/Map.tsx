import { useEffect } from 'react';

const Map = () => {
  useEffect(() => {
    const init = () => {
      // Проверяем, доступен ли объект ymaps
      //@ts-ignore
      if (!window.ymaps) return;

      // Создаем карту
      //@ts-ignore
      const map = new window.ymaps.Map('map', {
        center: [43.213852210791124, 76.83940852638776], // Центр карты (Алматы)
        zoom: 16, // Масштаб
      });

      // Добавляем маркер
      //@ts-ignore
      const placemark = new window.ymaps.Placemark([43.213852210791124, 76.83940852638776], {
        hintContent: 'Наш адрес',
        balloonContent: 'Мы находимся здесь: Алматы',
      });
      map.geoObjects.add(placemark);
    };

    // Ждем загрузки ymaps
    //@ts-ignore
    window.ymaps.ready(init);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        height: '555px',
        position: 'relative',
      }}
    >
      {/* Блок с контактами */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '20%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          zIndex: 10,
          textAlign: 'left',
          width: '300px',
        }}
      >
        <h1 style={{ margin: '0 0 10px', fontSize: '24px', fontWeight: 'bold' }}>
          Контакты
        </h1>
        <p style={{ margin: '0 0 5px', fontSize: '16px', color: '#555' }}>
          <b>Ваш город:</b> Алматы
        </p>
        <p style={{ margin: '0 0 5px', fontSize: '16px', color: '#555' }}>
          <b>Время работы:</b>
          <br />
          с 9:30 до 18:00 Пн-Пт
        </p>
        <p style={{ margin: '0 0 5px', fontSize: '16px', color: '#555' }}>
          <b>Телефоны:</b>
          <br />
          +7 (863) 203 60 48
          <br />
          +7 (863) 203 70 33
        </p>
      </div>

      {/* Карта */}
      <div
        id="map"
        style={{
          width: '100%',
          height: '100%',
        }}
      ></div>
    </div>
  );
};

export default Map;
