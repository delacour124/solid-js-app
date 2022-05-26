import { render } from "solid-js/web";
import { createSignal } from "solid-js";


function App() {

  const [count, setCount] = createSignal(0);
  const increment = () => setCount(count() + 1);
  const decrement = () => setCount(count() - 1);


  return (
    <div class = 'counter-container' data-testid='counter-container'>
      <p class = 'description' data-testid='description'>
        Press the buttons to change count!
      </p>
      <div class='count-container' data-testid='count-container'>
        <div class="count" data-testid='count'>
          {count()}
        </div>
        <button class="button" data-testid='increment-button' type="button" onClick={increment}>+</button>
        <button class="button" data-testid='decrement-button' type="button" onClick={decrement}>-</button>
      </div>
    </div>
  );
}



export default App;



// function App() {

//   function Counter() {
//     const [count, setCount] = createSignal(0);
//     const increment = () => setCount(count() + 1);
//     const decrement = () => setCount(count() - 1);

//     return (
//       <>
//         <div class="count" data-testid='count'>
//           {count()}
//         </div>
//         <button class="button" data-testid='increment-button' type="button" onClick={increment}>+</button>
//         <button class="button" data-testid='increment-button' type="button" onClick={decrement}>-</button>
//       </>
//     );
//   }
  
//   return (
//     <div class = 'counter-container' data-testid='counter-container'>
//       <p class = 'description' data-testid='description'>
//         Press the buttons to change count!
//       </p>
//       <Counter data-testid='counter' />
//     </div>
//   );
// }

