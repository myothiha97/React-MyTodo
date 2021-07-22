import { ReactComponent as SunLogo } from "../../assets/icon-sun.svg";
import { ReactComponent as MoonLogo } from "../../assets/icon-moon.svg";

import { connect } from "react-redux";
import { setTheme } from "../../redux/theme/theme.actions";

const Logo = ({ theme, toggleTheme }) => {
  return (
    <div onClick={toggleTheme}>
      {theme ? (
        <SunLogo fill="black" stroke="white" className="toggle-btn"></SunLogo>
      ) : (
        <MoonLogo fill="white" stroke="black" className="toggle-btn"></MoonLogo>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleTheme: () => dispatch(setTheme()),
});

export default connect(null, mapDispatchToProps)(Logo);
