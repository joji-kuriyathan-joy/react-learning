import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from "./Food.jsx"
import Card from "./Card.jsx"
import Button from "./Button/Button.jsx"
import ButtonUpdate from "./ButtonUpdate.jsx"
import Student from "./Student.jsx"
import UserGreeting from "./UserGreeting.jsx"
import List from "./List.jsx"
import GenericList from "./GenericList.jsx"
import ButtonClick from "./ButtonClick.jsx"
import ProfilePic from "./ProfilePic.jsx"
import Counter from "./Counter.jsx"
import MyComponent from "./MyComponent.jsx"
import MyComponentOnChange from "./MyComponentOnChange.jsx"
import CounterUpdaterFunction from "./CounterUpdaterFunction.jsx"
import ColorPicker from "./ColorPicker.jsx"
import UpdateObjState from "./UpdateObjState.jsx"
import UpdateArraySate from './UpdateArraySate.jsx'
import ArrayObjectState from './ArrayObjectState.jsx'
import Todolist from './Todolist.jsx'
//props = read-only properties that are shared btw components.
//        A parent component can send data to a child component
//       <Component key=value/>


//conditional rendring = allow you to control what gets renderd in 
//                       your application based on certain conditions
//                       (show , hide or change components)

function App() {

  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 75 },
    { id: 4, name: "pineapple", calories: 175 },
  ];

  const vegetables = [
    { id: 7, name: "potatos", calories: 105 },
    { id: 8, name: "celery", calories: 25 },
    { id: 9, name: "carrots", calories: 67 },
    { id: 6, name: "brocoli", calories: 85 },
  ];




  return(
    // empty anchor are used to bundle more than one components
    // this is called a Fragement
    <>
      <Header/>
      <Food/>
      <Card/>
      <Button/>
      <ButtonUpdate/>
      <Student name="Spongebob" age={30} isStudent={true}/>
      <Student name="Patric" age={45} isStudent={false}/>
      <Student name="Squidward" age={50} isStudent={false}/>
      <Student name="Sandy" age={27} isStudent={true}/>
      <Student />
      <UserGreeting isLoggedIn={true} userName="BroCode"/>
      <List/>
      {fruits.length > 0 && <GenericList item={fruits} category="Fruits"/>}
      {vegetables.length > 0?<GenericList item={vegetables} category="Vegetables"/> :null}
      <ButtonClick/>
      <ProfilePic/>
      <MyComponent/>
      <Counter/>
      <MyComponentOnChange/>
      <ColorPicker/>
      <CounterUpdaterFunction/>
      <UpdateObjState/>
      <UpdateArraySate/>
      <ArrayObjectState/>
      <Todolist/>
      <Footer/>
      
    </>
  );
}

export default App
