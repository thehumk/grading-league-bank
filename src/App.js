
function App() {
  return (
    <div>
      <header className="page-header">
        <div className="page-header__logo">ЛИГА Банк</div>
        <nav className="page-header__nav main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <a className="main-nav__link" href="#">Услуги</a>
            </li>
            <li className="main-nav__item">
              <a className="main-nav__link" href="#">Рассчитать кредит</a>
            </li>
            <li className="main-nav__item">
              <a className="main-nav__link main-nav__link--active">Конвертер валют</a>
            </li>
            <li className="main-nav__item">
              <a className="main-nav__link" href="#">Контакты</a>
            </li>
            <li className="main-nav__item">
              <a className="main-nav__link" href="#">Задать вопрос</a>
            </li>  
          </ul>
        </nav>
        <section className="page-header__user-block user-block">
          <a className="user-block__link" href="#">Войти в Интернет-банк</a>
        </section>
      </header>
      <main>
        <section className="main-screen">
          <div className="main-screen__container">
            <h1 className="main-screen__title">Лига Банк</h1>
            <p className="main-screen__promo">Кредиты на любой случай</p>
            <a href="#" className="main-screen__link">Рассчитать кредит</a>
          </div>
        </section>
        <section className="currency-converter">
          <h2 className="currency-converter__title">Конвертер валют</h2>
          <div>
            <div className="currency-converter__field">
              <label>
                <h3 className="currency-converter__field-title">У меня есть</h3>
                <input className="currency-converter__input" type="number" name="" placeholder="0"/>
              </label>
              <select name="" id="" defaultValue="RUB" className="currency-converter__select-currency">
                <option value="RUB">RUB</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBR">GBR</option>
                <option value="CNY">CNY</option>
              </select>
            </div>
            <div className="currency-converter__field">
              <label>
                <h3 className="currency-converter__field-title">Хочу приобрести</h3>
                <input className="currency-converter__input" type="number" name="" placeholder="0"/>
              </label>
              <select name="" id="" defaultValue="USD" className="currency-converter__select-currency">
                <option value="RUB">RUB</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBR">GBR</option>
                <option value="CNY">CNY</option>
              </select>
            </div>
            <div>
              <input className="currency-converter__calendar" type="text" defaultValue="4.02.2020" readOnly/>
              <button className="currency-converter__save-button"></button>
            </div>
          </div>
        </section>
        <section className="conversion-history">
          <h2 className="conversion-history__title">История конвертации</h2>
          <ul className="conversion-history__list">
            <li className="conversion-history__item">
              <p className="conversion-history__date">04.02.2020</p>
              <div className="conversion-history__currency-container">
                <p className="conversion-history__before">1000 RUB</p>
                <p className="conversion-history__after">13,1234 USD</p>
              </div>
            </li>
            <li className="conversion-history__item">
              <p className="conversion-history__date">04.02.2020</p>
              <div className="conversion-history__currency-container">
                <p className="conversion-history__before">1000 RUB</p>
                <p className="conversion-history__after">13,1234 USD</p>
              </div>
            </li>
            <li className="conversion-history__item">
              <p className="conversion-history__date">04.02.2020</p>
              <div className="conversion-history__currency-container">
                <p className="conversion-history__before">1000 RUB</p>
                <p className="conversion-history__after">13,1234 USD</p>
              </div>
            </li>
            <li className="conversion-history__item">
              <p className="conversion-history__date">04.02.2020</p>
              <div className="conversion-history__currency-container">
                <p className="conversion-history__before">1000 RUB</p>
                <p className="conversion-history__after">13,1234 USD</p>
              </div>
            </li>
            <li className="conversion-history__item">
              <p className="conversion-history__date">04.02.2020</p>
              <div className="conversion-history__currency-container">
                <p className="conversion-history__before">1000 RUB</p>
                <p className="conversion-history__after">13,1234 USD</p>
              </div>
            </li>
            <li className="conversion-history__item">
              <p className="conversion-history__date">04.02.2020</p>
              <div className="conversion-history__currency-container">
                <p className="conversion-history__before">1000 RUB</p>
                <p className="conversion-history__after">13,1234 USD</p>
              </div>
            </li>
            <li className="conversion-history__item">
              <p className="conversion-history__date">04.02.2020</p>
              <div className="conversion-history__currency-container">
                <p className="conversion-history__before">1000 RUB</p>
                <p className="conversion-history__after">13,1234 USD</p>
              </div>
            </li>
          </ul>
          <button className="conversion-history__clear-button">Очистить историю</button>
        </section>
      </main>
      <footer className="page-footer">
        <section className="page-footer__address address">
          <div className="address__logo"></div>
          <div className="address__contacts">150015, г. Москва, ул. Московская, д. 32 Генеральная лицензия Банка России №1050 Ⓒ Лига Банк, 2019</div>
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
              <p className="contacts__tel contacts__tel--mobile">*0904</p>
              <p className="contacts__info">Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2</p>
            </li>
            <li className="contacts__item">
              <p className="contacts__tel contacts__tel--main">8 800 111 22 33</p>
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
      </footer>
    </div>
  );
}

export default App;
