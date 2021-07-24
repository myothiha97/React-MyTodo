import { ReactComponent as SunLogo } from "../../assets/icon-sun.svg";
import { ReactComponent as MoonLogo } from "../../assets/icon-moon.svg";

import { useContext } from "react";
import ThemeContext from "../../contexts/theme/theme.context";

const Logo = ({ theme }) => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <div onClick={() => toggleTheme()}>
      {theme ? (
        <SunLogo fill="black" stroke="white" className="toggle-btn"></SunLogo>
      ) : (
        <MoonLogo fill="white" stroke="black" className="toggle-btn"></MoonLogo>
      )}
    </div>
  );
};

export default Logo;
