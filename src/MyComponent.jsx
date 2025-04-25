import { useState } from "react";



function MyComponent() {
    
    const [foods, setFoods] = useState(["pizza", "burger", "pasta"]);

    function handleAddFood() {

        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";
        setFoods(foods => [...foods, newFood]);
        // 不选择setFoods([...foods, newFood])是考虑到React的异步更新机制，如果进行多次调用时foods可能还是 旧的 值，进而导致最终的状态不是你的预期。
        // 而是选择setFoods(foods => [...foods, newFood])是因为我们需要在函数中使用最新的状态值。
    }
    function handleRemoveFood(index) {
        setFoods(foods.filter((_, i) => i !== index));
    }
    return (<div>
        <h2>List of Food</h2>
        <ul>
            {foods.map((food, index) => (
                <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>
            ))}
        </ul>
        <input type="text" id="foodInput" placeholder="Enter food name" />
        <button onClick={handleAddFood}>Add Food</button>
    </div>)
}
export default MyComponent