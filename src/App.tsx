import { SetStateAction, useState } from 'react'
import Coin from '../src/components/Coin'
import './App.css'

const coinList = [
  {
    id: "bitcoin",
    symbol: "btc",
    name: "Bitcoin",
  },
  {
    id: "ethereum",
    symbol: "eth",
    name: "Ethereum",
  },
];

function App() {
  const [coinType, setCoinType] = useState<string>('bitcoin')

  const selectCoin = (coinType: SetStateAction<string>) => setCoinType(coinType)

  return (
    <div>
      <div className='flexRow'>
        {
          coinList.map((coin) => {
            return (
              <button className='coinButton' key={coin.id} onClick={() => selectCoin(coin.id)}>{coin.name}</button>
            )
          })
        }
      </div>
      <Coin coinType={coinType} />
    </div>
  )
}

export default App
