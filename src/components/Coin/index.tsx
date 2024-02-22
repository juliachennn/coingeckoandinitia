import useAxios from '../../hooks/useAxios'

type Coinprops = {
  coinType: string
}

const Coin = (props: Coinprops) => {
  const { coinType } = props
  const { response } = useAxios(`/coins/${coinType}`)
  if (!response) return null

  const { id, image, market_data } = response

  return (
    <div className='coinBlock'>
      <img className='coinImg' src={image.small} />
      <div className='coinTitle'>{id}</div>
      <div>$ {market_data.current_price.usd} USD</div>
    </div>
  );
};

export default Coin;
