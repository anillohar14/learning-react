// import imageUrl from '../assets/images/right-arrow.png'
const Button = ({ imageURL }) => {
  return (
    <button title='buttonName'>
      <img src={imageURL} alt="arrow button" />
    </button>
  );
};

export default Button;
 