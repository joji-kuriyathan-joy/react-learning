function List() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 75 },
    { id: 4, name: "pineapple", calories: 175 },
  ];
  //ALPHABETICAL SORT
  // fruits.sort((a,b)=> a.name.localeCompare(b.name));
  // fruits.sort((a,b)=> b.name.localeCompare(a.name)); // REVERSE ALPHABTABLE SORT

  // fruits.sort((a,b) => a.calories - b.calories); // Numeric sort
  fruits.sort((a, b) => b.calories - a.calories); // Reverse Numeric sort

  const lowCalFruits = fruits.filter((fruit) => fruit.calories < 80);
  const highCalFruits = fruits.filter((fruit) => fruit.calories >= 80);


  // const listItems = fruits.map(fruit =><li key={fruit.id}>
  //                                 {fruit.name}: &nbsp;
  //                                 <b>{fruit.calories}</b></li>);

  const listItems = lowCalFruits.map((lowCalFruit) => (
    <li key={lowCalFruit.id}>
      {lowCalFruit.name}: &nbsp;
      <b>{lowCalFruit.calories}</b>
    </li>
  ));

  const highCalListItems = highCalFruits.map((highCalFruit) => (
    <li key={highCalFruit.id}>
        {highCalFruit.name}: &nbsp;
        <b>{highCalFruit.calories}</b>
    </li>
  ));
  return (
    <div className="listExp">
        <p>----- Single Purpose List ------</p>
        <h5>Low Calories Fruit</h5>
        <ol>{listItems}</ol>
        <h5>High Calories Fruit</h5>
        <ol>{highCalListItems}</ol>
    </div>
  );
}

export default List;
