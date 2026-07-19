import './Cards.css';
function Cards({rec}) {
  return (
    <div className='card'>
        <img src={rec.image} />
    </div>
  )
}

export default Cards