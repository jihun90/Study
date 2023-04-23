import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [USD, setUSD] = useState();
  const [coin, setCoin] = useState(0);
  const [coinPerUSD, setCoinSelected] = useState();

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
        setCoinSelected(json[0].quotes.USD.price);
      });
  }, []);

  const onChangedUSD = (event) => {
    setUSD(event.target.value);
    setCoin(event.target.value * coinPerUSD);
  };

  const onChangeCoinSeleced = (event) => {
    setCoinSelected(event.currentTarget.value);
    setUSD(1.0);
  };

  function InputText({ value, onChanged }) {
    return (
      <div>
        <input value={value} onChange={onChanged} type="text" placeholder="Enter USD" />
      </div>
    );
  }

  function FormConvertUSDToCoin() {
    return (
      <div>
        <select onChange={onChangeCoinSeleced}>
          {coins.map((coin, index) => (
            <option key={index} value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
        <InputText value={USD} onChanged={onChangedUSD} />
        <h2>you can need {coin} coin</h2>
      </div>
    );
  }

  return (
    <div>
      <h1>The Conins {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loding...</strong> : <FormConvertUSDToCoin />}
    </div>
  );
}

export default App;
