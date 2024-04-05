import React from "react";

const Footer = () => {
  return (
    <>
      <div className="max-w-[100%]  bg-[#088269] pt-[40px]">
        <div className="w-[90%]   mx-auto">
          <div className="flex justify-between">
            <div className="w-[210px]  ">
              <p className="text-[14px] text-white mb-[14px]">Покупателям</p>
              <hr className="w-full mb-[15px]" />
              <div className="flex justify-between">
                <div>
                  <p className="text-white text-[14px] mb-[8px]">О компании</p>
                  <p className="text-white text-[14px] mb-[8px]">Сертификаты</p>
                  <p className="text-white text-[14px] mb-[8px]">Вакансии</p>
                  <p className="text-white text-[14px] mb-[8px]">Гарантии</p>
                  <p className="text-white text-[14px] mb-[8px]">Услуги</p>
                  <p className="text-white text-[14px] mb-[8px]">Акции</p>
                  <p className="text-white text-[14px] mb-[8px]">Доставка</p>
                </div>
                <div>
                  <p className="text-white text-[14px] mb-[8px]">Оплата</p>
                  <p className="text-white text-[14px] mb-[8px]">Возврат</p>
                  <p className="text-white text-[14px] mb-[8px]">FAQ</p>
                  <p className="text-white text-[14px] mb-[8px]">Лизинг</p>
                  <p className="text-white text-[14px] mb-[8px]">Отзывы</p>
                  <p className="text-white text-[14px] mb-[8px]">Блог</p>
                </div>
              </div>
            </div>
            <div className="w-[650px]  ">
              <p className="text-[14px] text-white mb-[14px]">Каталог</p>
              <hr className="w-full mb-[15px]" />
              <div className="flex justify-between">
                <div>
                  <p className="text-white text-[14px] mb-[8px]">Реанимация</p>
                  <p className="text-white text-[14px] mb-[8px]">Хирургия</p>
                  <p className="text-white text-[14px] mb-[8px]">
                    Офтальмология
                  </p>
                  <p className="text-white text-[14px] mb-[8px]">
                    Лабораторная диагностика
                  </p>
                  <p className="text-white text-[14px] mb-[8px]">
                    Акушерство и Гинекология
                  </p>
                  <p className="text-white text-[14px] mb-[8px]">Гистология</p>
                  <p className="text-white text-[14px] mb-[8px]">
                    Косметология
                  </p>
                </div>
                <div>
                  <p className="text-white text-[14px] mb-[8px]">
                    Орториноларингология
                  </p>
                  <p className="text-white text-[14px] mb-[8px]">
                    Рентгенология и томография
                  </p>
                  <p className="text-white text-[14px] mb-[8px]">
                    Стрерилизация
                  </p>
                  <p className="text-white text-[14px] mb-[8px]">
                    Физиотерапия и реабилитация
                  </p>
                  <p className="text-white text-[14px] mb-[8px]">
                    Функциональная диагностика
                  </p>
                  <p className="text-white text-[14px] mb-[8px]">Эндоскопия</p>
                </div>
                <div>
                  <p className="text-white text-[14px] mb-[8px]">Новинки</p>
                  <p className="text-white text-[14px] mb-[8px]">Распродажи</p>
                  <p className="text-white text-[14px] mb-[8px]">
                    Кабинеты под ключ
                  </p>
                  <p className="text-white text-[14px] mb-[8px]">
                    Скачать каталогинки
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[210px]  ">
              <p className="text-[14px] text-white mb-[14px]">Контакты</p>
              <hr className="w-full mb-[15px]" />
              <div className="flex justify-between">
                <div>
                  <p className="text-white text-[14px] mb-[8px]">Адрес</p>
                  <p className="text-white text-[14px] mb-[20px]">
                    г. Москва, ул. Московская, д. 35{" "}
                  </p>
                  <p className="text-white text-[14px] mb-[25px]">
                    Карта проезда
                  </p>
                  <p className="text-white text-[14px] mb-[3px]">
                    График работы:
                  </p>
                  <p className="text-white text-[14px] mb-[3px]">
                    {" "}
                    Пн-Пт с 09:00-19:00,
                  </p>
                  <p className="text-white text-[14px] mb-[25px]">
                    Сб-Вс - выходной
                  </p>
                  <p className="text-white text-[14px] mb-[8px]">
                    +7 000-000-00-00
                  </p>
                  <p className="text-white text-[14px] mb-[8px]">
                    +7 495-000-00-00
                  </p>
                  <p className="text-white text-[14px] mb-[8px]">
                    8 800-000-00-00
                  </p>
                  <p className="text-white text-[14px] mb-[8px]">
                    info@mail.ru
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr className="w-full mt-[60px] mb-[15px]" />
          <div className="flex justify-between">
            <div>
              <img
                className="w-[95px] h-[45px] mb-[10px]"
                src="https://global-mt.ru/local/templates/gmt/img/Logo2.svg"
                alt="rasm"
              />
              <p className="text-white text-[12px]">
                ООО «ГЛОБАЛ МЕДИКАЛ ТРЕЙД»
              </p>
            </div>
            <div>
              <p className="text-white text-[14px] mb-[10px]">Мы в соцсетях</p>
              <div className="flex align-center gap-[10px]">
                <img
                  src="https://global-mt.ru/local/templates/gmt/img/telegram.svg"
                  alt="rasm"
                />
                <img
                  src="https://global-mt.ru/local/templates/gmt/img/telegram.svg"
                  alt="rasm"
                />
                <img
                  src="https://global-mt.ru/local/templates/gmt/img/telegram.svg"
                  alt="rasm"
                />
              </div>
            </div>
            <div>
              <p className="text-white text-[14px] mb-[8px]">
                Партнерская программа
              </p>
              <p className="text-white text-[14px] mb-[8px]">Оптовые продажи</p>
              <p className="text-white text-[14px] mb-[8px]">Реквизиты</p>
            </div>
            <div>
              <p className="text-white text-[14px] mb-[8px]">
                Политика конфиденциальности
              </p>
              <p className="text-white text-[14px] mb-[8px]">
                Условия соглашения
              </p>
              <p className="text-white text-[14px] mb-[8px]">Карта сайта</p>
            </div>
            <div>
              <p className="text-white text-[14px] mb-[8px]">Способы оплаты</p>
              <div className="flex align-center gap-[16px]">
                <img
                  className="w-[50px] h-[30px]"
                  src="data:image/png;base64,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"
                  alt="rasm"
                />
                <img
                  className="w-[50px] h-[30px]"
                  src="data:image/jpeg;base64,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"
                  alt="rasm"
                />
                <img
                  className="w-[50px] h-[30px]"
                  src="data:image/png;base64,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"
                  alt="rasm"
                />
              </div>
            </div>
          </div>
          <div className="mt-[60px] flex align-center justify-between">
            <p className="text-white text-[12px] w-[153px]">
              © 2022 Медоборудование Все права защищены
            </p>
            <p className="text-[12px] text-white opacity-50 mt-[5px]">
              Информация на данном сайте носит справочный характер и не является
              публичной офертой, определяемой положениями Статьи 437
              Гражданского кодекса Российской Федерации
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
