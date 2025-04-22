import PropTypes from 'prop-types';


// 这样的组件就可以重复利用，无论是什么类别的都可以输入进来
function List({category="Category", items=[]}){
  
      // fruits.sort((a, b) => a.calories - b.calories);  NUMERIC SORT
      // fruits.sort((a, b) => b.calories - a.calories);  //REVERSE NUMERIC SORT
      // fruits.sort((a, b) => a.name.localeCompare(b.name));  //ALPHABETICAL SORT
        
      // const lowCalories = fruits.filter((fruit) => fruit.calories < 100);
      // const highCalories = fruits.filter((fruit) => fruit.calories > 100);

    const listItems = items.map((item) => <li key={item.id}>
                                              {item.name}: &nbsp;
                                              <b>{item.calories}</b></li>);
    return (
       <>
          <h3 className="list-category">{category}</h3>
          <ol className="list-items">{listItems}</ol>
       </>
    )
}
List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    }
  )),
}

export default List;
