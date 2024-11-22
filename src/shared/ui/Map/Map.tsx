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
        center: [43.213852210791124,76.83940852638776], // Центр карты (Москва)
        zoom: 16,                      // Масштаб
      });

      // Добавляем маркер (опционально)
      //@ts-ignore
      const placemark = new window.ymaps.Placemark([43.213852210791124,76.83940852638776], {
        hintContent: 'Москва',
        balloonContent: 'Столица России',
      });
      map.geoObjects.add(placemark);
    };

    // Ждем загрузки ymaps
    //@ts-ignore
    window.ymaps.ready(init);
  }, []);

  return (
    <div>
      <div
        id="map"
        style={{
          width: '100%',
          height: '500px',
        }}
      ></div>
    </div>
  );
};

export default Map;
