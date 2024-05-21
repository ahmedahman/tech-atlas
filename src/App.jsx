import styles from "./style";
import { Next, About, Connect, CTA, Footer, Navbar, Benefits, Information, Hero } from "./components";

const App = () => (
  <div className="bg-white w-full overflow-hidden font-montserrat">
    <div className={`flex justify-center items-center`}>
      <div className={`w-full`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-white flex justify-center items-start`}>
      <div className={`w-full`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-white md:px-16 px-6 flex justify-center items-center`}>
      <div className={`w-full`}>
        <Benefits />
        <About />
        <Next />
        <Connect />
        <Information />
        <CTA />
      </div>
    </div>

    <div className={`flex justify-center items-center`}>
      <div className={`w-full`}>
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
