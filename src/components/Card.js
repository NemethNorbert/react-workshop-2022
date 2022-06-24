export default function Card({removeCard, card}) {
    return (
        <div style={{ margin: '1em', width: '130px', border: '2px solid grey', padding: '0.5em', flexDirection: 'row', flexWrap: 'wrap', flex: '2',}}>
            <img alt="avatar" style={{ width: '70px' }} src={card.avatar_url} />
            <button style={{float: 'right'}} onClick={()=>removeCard(card)}>x</button>
            <div>
                <div style={{ fontWeight: 'bold' }}>{card.name}</div>
                <div>{card.company}</div>
            </div>
        </div>
    )
}