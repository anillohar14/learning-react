// import Button from "./Button";

// // to pass the image url er need to import the images
// // import RightArrow from 'url:../assets/images/right-arrow.png'; --> this is an old way this will give you an [object object] in console
// const RightArrow = new URL('../assets/images/right-arrow.png', import.meta.url);


// const AppleCounter = () => {
//   return (
//     <div>
//       <Button iamgeUrl={RightArrow.href } />
//     </div>
//   );
// };

// export default AppleCounter;


import AppleBasket from './AppleBasket';
import Button from './button';
import './AppleCounter.css'

// ✅ Correct way to load the image in Parcel 2
const RightArrow = new URL('../assets/images/right-arrow.png', import.meta.url);
const LeftArrow = new URL('../assets/images/left-arrow.png', import.meta.url);

const AppleCounter = () => {
  return (
    <section>
        <AppleBasket appleCount={0} basketName="basket 1"/>
      <Button imageURL={LeftArrow.href} title="Left Arrow" />
      <Button imageURL={RightArrow.href} title="Right Arrow" />
        <AppleBasket appleCount={10} basketName="basket 2"/>

    </section>
  );
};

export default AppleCounter;
