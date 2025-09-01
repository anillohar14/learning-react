const AppleBasket = ({ appleCount, basketName}) => {
  return (
    <div className="basket">
        <h1>
            <span>{appleCount}</span> apples
        </h1>
        <p>{basketName}{appleCount === 10 && "(full)"}{appleCount === 0 && "(empty)"}</p> 
    </div>
  )
}
export default AppleBasket

// step 4: Here in the line 7 we are using the && operator to check if the appleCount is equal to 10
//  if it is true then it will return the second operand (full) oherwise it will return false and the react 
// dont render the undefined, null, false values
// step 5: Now we have to check when the appleCount is 0 then we have to render (empty) so for that we can use 
// the same && operator with the curly barces 
// step 6: this is called conditional rendering not lets do component rendering in app.js file