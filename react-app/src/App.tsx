// import ListGroup from "./components/ListGroup";
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  let items = ["New York", "New Jersey", "London", "Paris"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}

      {/* <Alert>
        Hello <span>World</span>
      </Alert> */}
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button
        children="My Button"
        onClick={() => {
          setAlertVisibility(true);
        }}
        color="primary"
      />
    </div>
  );
}

export default App;
// Props : input passed to a component ; similar to function args ; treat as immutable

// State : Data  managed by a component ; similar to local variables ; treat as mutable
