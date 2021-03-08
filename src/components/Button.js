import PropTypes from 'prop-types';

const Button = ({ color, text }) => {
  const onClick = (e) => {
    console.log(e);
  };

  return (
    <div>
      <button onClick={onClick} className="btn">
        Add
      </button>
    </div>
  );
};

Button.defaultProps = {
  color: 'steelblue',
};

Button.protoTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};
export default Button;
