import List from './List';

function App() {
 const fruits = [{id: 1, name:"apple", calories: 95}, 
                    {id: 2, name:"banana", calories: 105}, 
                    {id: 3, name:"cherry", calories: 50}, 
                    {id: 4, name:"orange", calories: 62}, 
                    {id: 5, name:"coconut", calories: 300}];
 const vegetables = [{id: 1, name:"potatoes", calories: 110}, 
                    {id: 2, name:"tomatoes", calories: 15}, 
                    {id: 3, name:"onions", calories: 25}, 
                    {id: 4, name:"carrots", calories: 66}, 
                    {id: 5, name:"broccoli", calories: 50}];
  return ( 
    <>
      {fruits.length > 0 && <List items={fruits} category="Fruits"/> }
      {vegetables.length > 0  && <List items={vegetables} category="Vegetables"/> }
    </>
  );
}

export default App
 