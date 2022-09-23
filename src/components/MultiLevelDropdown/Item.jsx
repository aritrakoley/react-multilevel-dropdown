import { useState } from "react";

const Item = ({
  id,
  label,
  component,
  options,
  direction,
  path,
  level,
  setActivePath,
  getActivePath,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const thisLevel = level ? level : 0;
  const thisPath = path ? `${path}/${label}` : label;

  const vDirection = direction.split("-")[0];
  const directionStyle = {
    down: "",
    up: "bottom-[100%]",
    "down-right": "top-0 left-[95%] px-[5%]",
    "down-left": "top-0 right-[95%] px-[5%]",
    "up-left": "bottom-0 left-[95%] px-[5%]",
    "up-right": "bottom-0 right-[95%] px-[5%]",
  };
  const optionsStyle = `min-w-max w-full absolute transform ease-in-out duration-300 ${
    thisLevel > 0 ? directionStyle[direction] : directionStyle[vDirection]
  } ${isOpen ? "scale-100 opacity-100 " : "scale-0 invisible"}`;

  const openOptions = (e) => {
    // console.log("openOption Called");
    id === e.currentTarget.id && e.stopPropagation();

    setActivePath(thisPath);
    // console.log("open", { target: e.target.id, currentTarget: e.currentTarget.id, activePath: getActivePath(), label, id });

    if (isOpen) return;

    setIsOpen(true);
    // console.log("opended (isOpen -> true)");
  };

  const closeOptions = (e) => {
    const close = (e) => {
      // console.log("closeOptions > close Called");

      const activePath = getActivePath();
      // console.log("close", {target: e.target.id,currentTarget: e.currentTarget,activePath: getActivePath(),label,id});

      const isInCurrentPath = activePath.split("/").includes(label);
      if (isInCurrentPath) return;

      setIsOpen(false);
      // console.log("closed (isOpen -> false)");
    };

    setTimeout(() => close(e), 50);
  };

  return (
    <div
      id={id}
      className="w-full h-full relative"
      onMouseOver={openOptions}
      onMouseLeave={closeOptions}
    >
      {component ? (
        component
      ) : (
        <div
          id={id + "-label-container"}
          className="w-full h-full rounded-lg shadow-lg border border-gray-200 bg-white p-2 flex items-center justify-center text-gray-700 hover:bg-sky-400 hover:text-gray-100"
        >
          <span id={id + "-label"} className="flex grow mx-1 px-2">
            {label}
          </span>
          {!!options?.length && (
            <i
              id={id + "-arrow-icon"}
              className={`ml-auto ${vDirection === "up" ? "rotate-180" : ""}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </i>
          )}
        </div>
      )}
      {!!options?.length && (
        <div
          id={`${id}-options`}
          className={optionsStyle}
          style={{ zIndex: thisLevel }}
        >
          {options.map((e) => (
            <Item
              key={e.id}
              id={e.id}
              label={e.label}
              component={e.component}
              options={e.options}
              direction={direction}
              path={thisPath}
              level={thisLevel + 1}
              setActivePath={setActivePath}
              getActivePath={getActivePath}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Item;
