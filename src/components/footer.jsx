const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="page-footer__container">
        <section className="page-footer__address address">
          <a href="#" className="address__logo">ЛИГА Банк</a>
          <div className="address__contacts">
            <p>150015, г. Москва, ул. Московская, д. 32</p>
            <p>Генеральная лицензия Банка России №1050</p>
            <p>Ⓒ Лига Банк, 2019</p>
          </div>
        </section>
        <nav className="page-footer__nav footer-nav">
          <ul className="footer-nav__list">
            <li className="footer-nav__item">
              <a href="#" className="footer-nav__link">Услуги</a>
            </li>
            <li className="footer-nav__item">
              <a href="#" className="footer-nav__link">Рассчитать кредит</a>
            </li>
            <li className="footer-nav__item">
              <a href="#" className="footer-nav__link">Контакты</a>
            </li>
            <li className="footer-nav__item">
              <a href="#" className="footer-nav__link">Задать вопрос</a>
            </li>  
          </ul>
        </nav>
        <section className="page-footer__contacts contacts">
          <ul className="contacts__list">
            <li className="contacts__item">
              <a href="tel: *0904" className="contacts__tel contacts__tel--mobile">*0904</a>
              <p className="contacts__info">Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2</p>
            </li>
            <li className="contacts__item">
              <a href="tel: +78001112233" className="contacts__tel contacts__tel--main">8 800 111 22 33</a>
              <p className="contacts__info">Бесплатный для всех городов России</p>
            </li>
          </ul>
        </section>
        <section className="page-footer__social social">
          <ul className="social__list">
            <li className="social__item">
              <a href="#" className="social__link social__link--fb">
                <span className="visually-hidden">Мы в фейсбуке</span>
              </a>
            </li>
            <li className="social__item">
              <a href="#" className="social__link social__link--inst">
                <span className="visually-hidden">Мы в инстаграме</span>
              </a>
            </li>
            <li className="social__item">
              <a href="#" className="social__link social__link--twitter">
                <span className="visually-hidden">Мы в твиттере</span>
              </a>
            </li>
            <li className="social__item">
              <a href="#" className="social__link social__link--youtube">
                <span className="visually-hidden">Наш канал на ютубе</span>
              </a>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
