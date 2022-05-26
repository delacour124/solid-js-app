import "@testing-library/jest-dom";
import { screen, render, fireEvent, cleanup } from 'solid-testing-library';
import App from '../src/App'


// test if the component was rendered
describe('Rendering of the App component', () => {
  render(() =>(<App />));
  const appElement = screen.getByTestId('counter-container');

  it('is injected to the screen', () => {
    expect(appElement).toBeTruthy();
  });

  it('renders the app component as a html element', () => {
    expect(appElement).toBeInstanceOf(HTMLDivElement);
  });

  cleanup();
});

describe('App component has description', () => {
  render(() =>(<App />));
  const description = screen.getByTestId('description');
  
  it('Description text rendered to page', () => {
    expect(description).toBeInstanceOf(HTMLParagraphElement);
  });
  
  it('Description text matches correctly', () => {
    expect(description.innerHTML).toBe('Press the buttons to change count!')
  });
  // toBe: will pass if the value matches 
  // toEqual: will pass if they are referencing the same thing 

  cleanup();
});

// test increment button
describe('Increment button rendered to page', () => {
  render(() =>(<App />));
  // const description = screen.getByTestId('description');
  const incrementButton = screen.getByTestId('increment-button')
  
  it('Increment button rendered to page', () => {
    expect(incrementButton).toBeInstanceOf(HTMLButtonElement);
  });
  
  it('Increment button "plus" sign renders to button component', () => {
    expect(incrementButton.innerHTML).toBe('+')
  });

  // add test for onClick(increment)
  cleanup();

});

// test decrement button
describe('Decrement button rendered to page', () => {
  render(() =>(<App />));
  // const description = screen.getByTestId('description');
  const decrementButton = screen.getByTestId('decrement-button')
  
  it('Decrement button rendered to page', () => {
    expect(decrementButton).toBeInstanceOf(HTMLButtonElement);
  });
  
  it('Increment button "minus" sign renders to button component', () => {
    expect(decrementButton.innerHTML).toBe('-')
  });

  cleanup();
});

// test count
describe('Count was rendered correctly', () => {
  render(() =>(<App />));
  const count = screen.getByTestId('count');
  
  it('Count text rendered to page', () => {
    expect(count).toBeInstanceOf(HTMLDivElement);
  });
  
  it('Count text rendered to page with initial value of 0', () => {
    expect(count.innerHTML).toBe('0');
  });
  cleanup();
});


// test count container
describe('Count was rendered correctly', () => {
  render(() =>(<App />));
  const counterContainer = screen.getByTestId('count-container');
  
  it('Count text rendered to page', () => {
    expect(counterContainer).toHaveClass('count-container');
  });
  cleanup();
});

  // add test for onClick(decrement)


describe('Count is incremented by 1 when the button is pressed', () => {
  render(() =>(<App />));
  const incrementButton = screen.getByTestId('increment-button');
  // const decrementButton = screen.getByTestId('decrement-button');
  let count = screen.getByTestId('count');
  fireEvent.click(incrementButton);
  it('Count incremented by 1', () => {
    expect(count.innerHTML).toBe('1');
  });
  cleanup();  
});


describe('Count is incremented by 3 when the button is pressed n times', () => {
  render(() =>(<App />));
  const incrementButton = screen.getByTestId('increment-button');

  fireEvent.click(incrementButton);
  fireEvent.click(incrementButton);
  fireEvent.click(incrementButton);

  let count = screen.getByTestId('count');
  it('Count incremented by 3', () => {
    expect(count.innerHTML).toBe('3');
  });
  cleanup();  
});

describe('Count is incremented by n when the button is pressed n times', () => {
  render(() =>(<App />));
  const incrementButton = screen.getByTestId('increment-button');

  const n = Math.floor(Math.random() * 100);
  for (let i = 0; i < n; i++){
    fireEvent.click(incrementButton);
  }
  
  let count = screen.getByTestId('count');
  it('Count incremented by n', () => {
    expect(count.innerHTML).toBe(n.toString());
  });
  cleanup();  
});

describe('Count is correctly decremented when button is pressed', () => {
  render(() =>(<App />));
  // const incrementButton = screen.getByTestId('increment-button');
  const decrementButton = screen.getByTestId('decrement-button');
  let count = screen.getByTestId('count');
  fireEvent.click(decrementButton);
  it('Count decremented by 1', () => {
    expect(count.innerHTML).toBe('-1');
  });
  cleanup();  
});

describe('Count is decremented by 3 when the button is pressed n times', () => {
  render(() =>(<App />));
  const decrementButton = screen.getByTestId('decrement-button');

  fireEvent.click(decrementButton);
  fireEvent.click(decrementButton);
  fireEvent.click(decrementButton);

  let count = screen.getByTestId('count');
  it('Count decremented by 3', () => {
    expect(count.innerHTML).toBe('-3');
  });
  cleanup();  
});

describe('Count is decremented by n when the button is pressed n times', () => {
  render(() =>(<App />));
  const decrementButton = screen.getByTestId('decrement-button');

  const n = Math.floor(Math.random() * 100);
  for (let i = 0; i < n; i++){
    fireEvent.click(decrementButton);
  }
  
  let count = screen.getByTestId('count');
  it('Count decremented by n', () => {
    expect(count.innerHTML).toBe('-'+n.toString());
  });
  cleanup();  
});


  // it('it renders the App component', async () => {
  //   render(() =>(<App />));
  //   const appElement = await waitFor(()=>screen.getByTestId('counter-container'));
  //   expect(appElement).toBeTruthy();
  //   expect(appElement).toBeInstanceOf(HTMLDivElement);
  // });

  // test if the rendered component has p element with innerHTML with "press ... "
  // it('it renders the description of the button', async () => {
  //   await render(() => <App />);
  //   const description = await screen.getByText('Press the button to increment count!');
  //   console.log("description is: ", description);
  //   expect(description).toBeInTheDocument();
  // });
  



  // describe('temp testing', () => {
  //   it('it passes the test', () => {
  //     expect('hi').toBe('hi');
  //   });
  // });



// import userEvent from "@testing-library/user-event";
// "@testing-library/jest-dom": "^5.16.4",
// "jest": "^28.1.0",
// "solid-jest": "^0.2.0",
// "solid-testing-library": "^0.3.0",
