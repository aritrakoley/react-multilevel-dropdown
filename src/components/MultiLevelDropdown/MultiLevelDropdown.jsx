import Item from "./Item";
import { useRef, useState } from "react";

const MultiLevelDropdown = ({ options, direction = "down-right" }) => {
  const { id, label, component, options: subOptions } = options;
  const activePath = useRef("");
  const setActivePath = (item) => {
    activePath.current = item;
  };
  const getActivePath = () => activePath.current;

  const [mainIsActive, setMainIsActive] = useState(false);

  return (
    <div
      className="flex-1"
      onMouseEnter={() => setMainIsActive(true)}
      onMouseLeave={() => {
        // console.log("mouse leave main");
        setActivePath("");
        setMainIsActive(false);
      }}
    >
      <Item
        key={mainIsActive}
        id={id}
        label={label}
        component={component}
        options={subOptions}
        direction={direction}
        setActivePath={setActivePath}
        getActivePath={getActivePath}
      />
    </div>
  );
};

export default MultiLevelDropdown;
