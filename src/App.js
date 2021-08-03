import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/HeaderTop';
import MenuTop from './Components/Header/MenuTop';
import TopSection from './Components/topSection/TopSection';
import HomeSection from './Components/homeSection/HomeSection'
import CartSlider from './Components/slider/CartSlider';
import CartSliderGlass from './Components/slider/CartSliderGlass';
import 'swiper/swiper.scss';
import Footer from './Components/footer/Footer'


function App() {
  return (
    <div className="App">
      <Header />
      <MenuTop/>
      <section className="main-banners">
      <TopSection />
      </section>
      <div>
        <HomeSection />
      </div>

      <div className="container bg-light rounded p-4">
      <h3 className="text-center m-4 ">محصولات تخفیفی</h3>
        <div className="row">
          <CartSlider />
        </div>
      </div>
      <div className="container bg-light rounded p-4">
      <h3 className="text-center m-4 "> جدیدترین محصولات</h3>
        <div className="row">
          <CartSliderGlass />
        </div>
      </div>
      <div className="container bg-light rounded p-4">
      <h3 className="text-center m-4 ">محصولات پربازدید</h3>
        <div className="row">
          <CartSlider />
        </div>
      </div>
      <div className="container bg-light rounded p-4">
      <h3 className="text-center m-4 ">محصولات تصادفی</h3>
        <div className="row">
          <CartSlider />
        </div>
      </div>

   
      <Footer/>
   
    </div>
  );
}

export default App;
