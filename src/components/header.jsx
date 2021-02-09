const Header = () => {
  return (
    <header className="page-header">
      <div className="page-header__container">
        <a href="#" className="page-header__logo">ЛИГА Банк</a>
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
      </div>
    </header>
  );
}

export default Header;
