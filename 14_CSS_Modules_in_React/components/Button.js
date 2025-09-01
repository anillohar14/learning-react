// import imageUrl from '../assets/images/right-arrow.png'
const Button = ({ imageURL, onClick }) => {
  return (
    <button onClick={onClick} title='buttonName'>
      <img src={imageURL} alt="arrow button" />
    </button>
  );
};

export default Button;
 