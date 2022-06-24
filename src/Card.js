import PropTypes from 'prop-types';

function Card(props) {
    return (
      <div style={{ margin: '1em' }}>
        <img alt="avatar" style={{ width: '70px' }} src={props.avatar_url} />
        <div>
          <div style={{ fontWeight: 'bold' }}>{props.name}</div>
          <div>{props.blog}</div>
        </div>
      </div>
    )
}

Card.propTypes = {
    props: PropTypes.object
}

export default Card;