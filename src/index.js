import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Form from './components/Form';
import Count from "./components/count";
import Star from "./components/Star";
import Box from "./components/Box";

import Boxes from "./boxes";

function App() {

  const [squares, setSquare] = React.useState(Boxes)
  
  function toggle(id) {

    setSquare(prevSquare => {
      return prevSquare.map((square) => {
        return square.id === id ? {...square, on: !square.on} : square
          
      })
    })
  }



  const squareElements =  squares.map(square => (
    <Box key={square.id} on={square.on} toggle={() => toggle(square.id)}/>

  ))





  const [box, setBox] = React.useState(Boxes);

  //Boxes initial value

  const [user, setUser] = React.useState("Joe");
  // const [count, setCount] = React.useState(0)

  // function add() {
  //   setCount(prevCount => prevCount + 1)
  // }


  // function minus() {
  //   setCount(prevCount => prevCount - 1)
  // }  


  // console.log("app rendered")
  


  // const [contact, setContact] = React.useState({
  //   firstName: "John",
  //   lastName: "Doe",
  //   phone: "+1 (719) 555-1221",
  //   email: "itsmyrealname@example.com",
  //   isFavorite: true
  // })


  // let starIcon = contact.isFavorite ? "2.png" : "3.png"

  // function toggleFavorite() {
  //   setContact(prevContact => ({
  //     ...prevContact,
  //     isFavorite: !prevContact.isFavorite
  //   }))
  // }


  // const list = Boxes.map(box => {
  //   return (
  //    <div styles={style}className="box" key={box.id}></div>
  //   )
  // })

  // const styles = {
  //   backgroundColor: "black"
  // }
  
  return (
    <div>
      <Header name={user}/>
      <Form name={user}/>

      {squareElements}

      {/* <main>
        <h1> Boxes will go here.</h1>
        {list}
      </main> */}


      {/* <div>
        <button onClick={add}>+</button>
        <div>
          <Count number={count} />
        </div>
        <button onClick={minus}>-</button>
      </div> */}


      {/* <main>
        <article>
          <div>
            <Star isFilled={contact.isFavorite}  handleClick={toggleFavorite}/>

            <h2>{contact.firstName}{contact.lastName}</h2>

            <p>{contact.phone}</p>
            <p>{contact.email}</p>
          </div>
        </article>
      </main> */}
    </div>
  )
}

ReactDOM.render(<App darkMode={true}/>, document.getElementById("root"));