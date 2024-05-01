/*  
  Tạo 1 nút đếm số bắt đầu từ 1 
*/

import { useState } from "react";

function TodoList() {


  
  const [car, setCar] = useState('')
  const [cars, setCars] = useState(() => {
    const storageCars = JSON.parse(localStorage.getItem('cars'))
    return storageCars
  })
  const add = () => {
    setCars(prev => {
      const newCars = [...prev, car]

      // save loacalStor
      const carsJSON = JSON.stringify(newCars)
      localStorage.setItem('cars', carsJSON)
      return newCars
    })
    setCar('')
  }

  return (
    <div style={{ padding: 20 }}>
      <input
        value={car}
        onChange={e => setCar(e.target.value)}
      />
      <button onClick={add}>Add</button>
      <ul>
        {cars.map((car, index) => (
          <li key={index}>{car}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
