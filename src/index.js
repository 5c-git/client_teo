// SvgSprite compiler
function requireAll(r) {
  r.keys().forEach(r);
}
requireAll(require.context("./assets/icons/", true, /\.svg$/));
// UTILS
import "./utils/utils.js";

// LIBS SCSS
import "choices.js/src/styles/choices.scss";
import 'flatpickr/dist/themes/light.scss';

//------------------------------------------------------------
// 100vh hack for mobile-browsers
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty("--vh", `${vh}px`);
window.addEventListener("resize", () => {
  vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});
// usage in css
// height: calc(var(--vh, 1vh) * 100);
// 100vh hack for mobile-browsers
//------------------------------------------------------------

//Basic components
import "./components/header/header";
import "./components/footer/footer";
import './components/layout/layout';
import "./components/window/window";

//Project components
import "./components/trade/trade";
import './components/exchange-rate/exchange-rate';
import './components/trade-type/trade-type';
import './components/trade-card/trade-card';
import './components/total/total';
import './components/select2/select2';
import './components/flatpickr-calendar/flatpickr-calendar';
import './components/trade-action/trade-action';