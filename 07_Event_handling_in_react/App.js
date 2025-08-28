import AppleCounter from "./components/AppleCounter"
const App = () => {
    return (
            //  <div>
            //     <AppleCounter onClick = {(e)=>{
            //          console.log(e)
            //     }}/>
            //  </div>

            // this is different
             <div>
                <AppleCounter/>
             </div>
  )
}

export default App

// i have added the event to AppleCounter component it will than passed to AppleCounter component as an props than we used that
//  on AppleCounter file

// Now let pass the events on button 