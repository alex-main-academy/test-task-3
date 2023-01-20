import About from './About/About';
import Future from './Future/Future';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Mouse from './Mouse/Mouse';
import Trade from './Trade/Trade';

export const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Hero />
        <Mouse />
        <About />
        <Future />
        <Trade />
      </main>
    </div>
  );
};
