import './cardList.styles.css'
import Card from '../Card/Card.jsx'

const CardList = ({ monsters }) => (
	<div className='card-list'>
		{monsters.map(monster => {
			return <Card monster={monster} />
		})}
	</div>
);

export default CardList;