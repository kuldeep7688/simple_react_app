import { useState } from "react";
import { Fragment } from "react/jsx-runtime";
// import { MouseEvent } from "react";
interface Props {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void; // onClick
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //   item = [];
  // hook  is used to tap the built in features in react
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //   const message = item.length === 0 ? <p>No Item Found</p> : null;
  const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  };

  // Event handler
  //   const handleClick = (event: MouseEvent) => console.log(event);

  return (
    // a react compnonent can not return more than one element
    <Fragment>
      <h1>{heading}</h1>
      {/* {message} */}
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
