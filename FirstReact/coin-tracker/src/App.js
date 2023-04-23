import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  function CoinList() {
    return (
      <select>
        {coins.map((coin) => (
          <option key={coin.id}>
            {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
          </option>
        ))}
      </select>
    );
  }

  return (
    <div>
      <h1>The Conins {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loding...</strong> : <CoinList />}
    </div>
  );
}

export default App;
