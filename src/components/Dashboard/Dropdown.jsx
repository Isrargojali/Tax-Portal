import React from "react";
import "./Dashboard.css";

function Dropdown() {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef(null);

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleOutsideClick, true);

    return () => {
      document.removeEventListener("click", handleOutsideClick, true);
    };
  }, []);

  const dropData = [
    {
      label: "item",
      Links: "alsda",
    },
  ];

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      <button className="dd_btn" onClick={() => setIsOpen(!isOpen)}>
        <div className="dash_nav_btn">
          <img className="notification_icon" src="./Assets/notification.png" />
          <img className="profile_icon" src="./Assets/profile.png" />
          <span>saira karim</span>
          <img className="dropdown_icon" src="./Assets/dropdown.png" />
        </div>
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {dropData.map((item) => (
            <li>{item.label}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
