
import Joke from "./Practice/Joke";
import Cart from "./Practice/Cart";
import Counterpage from "./Practice/Counterpage";
import Numbers from "./Practice/Numbers";

function App() {


  return (

    <>
      <Counterpage />

      <Cart
        name="philip"
        age="20"
        school="oda"
        country="ghana"
      />

      <Joke
        setup=" my favor"
        punchline="oh my favor. so good is my favor. i am a favor. a favor with so much favor. so dome a favor"
      />

      <Numbers />




    </>

  );
}

export default App;
