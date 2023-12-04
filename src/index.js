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



  //forms

  const [formData, setFormData] = React.useState(
    {
      firstName: "", 
      lastName: "", 
      email: "", comment: "", 
      isFriendly: true,
      employment: "",
      favColor: ""
  })

  console.log(formData.favColor)
    
  
  console.log(formData.comment)

  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData, 
        [name]: type === "checkbox" ? checked : value
      }
    })

  }



  function handleSubmit(event) {
    event.preventDefault()
    //submitToApi(formData)
    console.log(formData)
  }




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


      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='First Name'
          onChange={handleChange}
          name="firstName"
          value={formData.firstName}
        />

      <input
          type='text'
          placeholder='Last Name'
          onChange={handleChange}
          name="lastName"
          value={formData.lastName}
        />

      <input
          type='text'
          placeholder='Email'
          onChange={handleChange}
          name="email"
          value={formData.email}
        />

        <textarea 
        onChange={handleChange} 
        name="comment" 
        value={formData.comment}
        placeholder='Comment'
        />


        <input type='checkbox' name='isFriendly' id="isFriendly" checked={formData.isFriendly} onChange={handleChange}/>
        <label htmlFor="isFriendly">Are you friendly?</label>
        <br/>


        <fieldset>
          <legend>Current Employment Status</legend>
          <input
            type="radio"
            id="unemployed"
            name="employment"
            value="unemployed"
            checked={formData.employment === "unemployed"}
            onChange={handleChange}
          />


          <label htmlFor='unemployed'>Unemployed</label>
          <br/>

          <input
            type='radio'
            id="part-time"
            name="employment"
            value="part-time"
            checked={formData.employment === "part-time"}
            onChange={handleChange}
          />
          <label htmlFor='part-time'>Part-time</label>
          <br/>

          <input
            type='radio'
            id="full-time"
            name="employment"
            value="full-time"
            checked={formData.employment === "full-time"}
            onChange={handleChange}
          />
          <label htmlFor='full-time'>Full-time</label>
          <br/>


          <label htmlFor='favColor'>What is your favourite color?</label>
          <br/>
          <select 
            id="favColor"
            value={formData.favColor}
            onChange={handleChange}
            name="favColor"


          >
            <option value="--">--Choose--</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="indigo">Indigo</option>
            <option value="violet">Violet</option>
          </select>


          <br/>
          <br/>

          <button type="submit">Submit</button>
        </fieldset>
      </form>
    

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