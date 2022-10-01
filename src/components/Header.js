import React, { useState } from "react";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

function Header() {
  const [showHeader, setShowHeader] = useState(false);
  return (
    <div className="Header">
      {showHeader ? (
        <RiCloseFill
          onClick={() => setShowHeader(!showHeader)}
          className="menu-icon position-fixed top-0 end-0"
        />
      ) : (
        <RiMenu3Fill
          onClick={() => setShowHeader(!showHeader)}
          className="menu-icon position-fixed top-0 end-0"
        />
      )}
    </div>
  );
}

export default Header;
