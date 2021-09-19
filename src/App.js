import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const heading = ['My blog 1', 'My blog 1', 'My blog 1'];
  const author = ['User 1', 'User 1', 'User 1']
  return (
    <div className="App">
      <Mobile></Mobile>
      <Todo></Todo>
      <Blog heading='My blog 1' author='User 1'></Blog>
      <Blog heading='My blog 2' author='User 2'></Blog>
      <Blog heading='My blog 3' author='User 3'></Blog>
      <Myarticle></Myarticle>
      <Myarticle></Myarticle>
      <Myarticle></Myarticle>

    </div>
  );
}
function Myarticle() {
  const myStyle = {
    fontSize: '45px',
    fontWeight: 'bold',
    color: 'red'
  }
  return (
    <div>
      <article className='blog'>
        <h3 style={myStyle}>My blog</h3>
        <p style={{ fontSize: '22px', fontFamily: 'sans-serif', letterSpacing: '1px', lineHeight: '34px' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi sint doloribus consectetur accusantium nam illum explicabo cupiditate error eum. Non ducimus maxime laboriosam porro ut repellat. Tempora obcaecati voluptas iste?</p>
      </article>
    </div>
  )
}
function Blog(props) {
  return (
    <div className='blog'>
      <h1>{props.heading}</h1>
      <p>চিকিৎসাবিষয়ক সাময়িকী ল্যানসেট–এর গবেষণার তথ্য অনুযায়ী, একজন হাসপাতালে ভর্তি রোগীর বিপরীতে ২০ থেকে ৪০ জন পর্যন্ত <br /> Athor:{props.author}</p>
    </div>
  )
}
function Mobile() {
  const [battery, setBattery] = useState(100);
  const handleBattery = () => {
    if (battery > 0) {
      const newBattery = battery - 10;
      setBattery(newBattery);
    }
  }
  const chargeBattery = () => {
    if (battery < 100) {
      const chargeBattery = battery + 10;
      setBattery(chargeBattery)
    }
  }
  return (
    <div>
      <h1>Charge Condition:{battery}</h1>
      <button style={{ padding: '10px', borderRadius: '15px', background: 'red', color: '#fff' }} onClick={handleBattery}>Battery Down</button>
      <button style={{ padding: '10px', borderRadius: '15px', background: 'black', color: '#fff', marginLeft: '15px' }} onClick={chargeBattery}>Charge Battery</button>
    </div>
  )
}
function Todo() {
  const [toDoData, setTodo] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => console.log(data))
  }, [])


  return (
    <div className='blog'>
      <p>
        {
          toDoData.map(data => data.title)
        }
      </p>

    </div>
  )
}
export default App;
