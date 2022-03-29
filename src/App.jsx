import './App.css';
import Labas from "./Components/Labas";
import Gamta from "./Components/Gamta";
import Zverys from "./Components/Zverys";
import Dupro from "./Components/Dupro";
import Tryspro from "./Components/Tryspro";


function App() {
  return (
    <div className="App">
      <h1>Labas</h1>
      <hr style={{width:'90%'}}></hr>
      <h2>1 UZD</h2>
      <Labas></Labas>
      <hr style={{width:'90%'}}></hr>
      <h2>2 UZD</h2>
      <Gamta text='Šiandien oras yra geras, saulėta'></Gamta>
      <hr style={{width:'90%'}}></hr>
      <h2>3 UZD</h2>
      <Zverys anim={1}></Zverys>
      <Zverys anim={2}></Zverys>
      <Zverys anim={3}></Zverys>
      <hr style={{width:'90%'}}></hr> 
      <h2>4 UZD</h2>
      <Dupro txt1='Saulė šviečia' txt2='Debesėliai plaukia'></Dupro>
      <hr style={{width:'90%'}}></hr>
      <h2>5 UZD</h2>
      <Tryspro one='H1 Tekstas' two='H2 Tekstas' three='lightblue'></Tryspro>
      <hr style={{width:'90%'}}></hr>
    </div>
  );
}

export default App;








// REACT BASE



// 1. Sukurti komponentą, kuris užrašytų “LABAS, ZUIKI!”. Raidžių spalva pink. Spalva tekstui nurodoma komponento viduje naudojant style.

// 2. Sukurti komponentą, kuris gauną vieną props. Props yra bet koks tekstas, kuris komponente atvaizduojamas h1 tage.

// 3. Sukurti komponentą rodantį tekstą h1 tage- “Zebrai ir Bebrai”, kuris gauna vieną props, kuris lygus 1 arba 2. Jeigu props lygus 1 tekstas nudažomas mėlynai, o jeigu 2 - raudonai.

// 4. Sukurti komponentą, kuris gauna du props. Vienas props bet koks tekstas, kuris komponente atvaizduojamas h1 tage, o antras bet koks tekstas kuris atvaizduojamas h2 tage.

// 5. Sukurti komponentą, kuris gauna tris props. Vienas props bet koks tekstas, kuris komponente atvaizduojamas h1 tage, o antras bet koks tekstas kuris atvaizduojamas h2 tage, o trečias yra spalva, kuria nudažomi abu tekstai.

