import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { CaretDown, CaretRight } from "phosphor-react";
import { Link, useLocation } from "react-router-dom";

const UpTriangle = ({ size }: { size: number }) => {
  const borderStyle = "1px solid rgb(209,213,219)";
  return (
    <div
      style={{
        position: "absolute",
        top: "-4px",
        left: "15px",
        width: `${size}px`,
        height: `${size}px`,
        transform: "rotate(45deg)",
        backgroundColor: "white",
        borderLeft: borderStyle,
        borderTop: borderStyle,
      }}
    ></div>
  );
};

const DropDown: React.FC<{
  options: { name: string; routh: string }[];
  name: string;
}> = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const showCaretDown = isExpanded;
  const showCaretRight = !isExpanded;

  const location = useLocation();
  console.log(location.pathname);

const Paths = props.options.map((el) =>el.routh);
const isActive = Paths.includes(location.pathname.slice(1));
console.log(isActive);

  return (
    <div className="relative">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`flex items-center rounded text-[30px] text-white px-2 bg-gray-400 hover:bg-gray-500 ${isActive && "active"}`}
      >
        {props.name}
        <div>
          {showCaretDown && <CaretDown size={32} />}
          {showCaretRight && <CaretRight size={32} />}
        </div>
      </button>
      {isExpanded && (
        <div className="absolute bg-white rounded border py-6 mt-2 w-48 px-2">
          <UpTriangle size={12} />
          <ul>
            {props.options.map((option) => (
              <li
                className="hover:bg-blue-400 hover:text-white defaultPadding text-[24px] cursor-pointer"
                key={uuidv4()}
              >
                <Link
                  to={option.routh}
                  onClick={() => setIsExpanded(false)}
                >
                  {option.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;
