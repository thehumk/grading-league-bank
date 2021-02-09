import Header from './components/header';
import Footer from './components/footer';
import CurrencyConverter from './components/currency-converter';
import ConversionHistory from './components/conversion-history';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <section className="main-screen">
          <div className="main-screen__background-container"></div>
          <div className="main-screen__container">
            <h1 className="main-screen__title">Лига Банк</h1>
            <p className="main-screen__promo">Кредиты на любой случай</p>
            <a href="#" className="main-screen__link">Рассчитать кредит</a>
          </div>
        </section>
        <CurrencyConverter/>
        <ConversionHistory/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
