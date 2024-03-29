import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

function Paragraph() {
  const context = useContext(ThemeContext);
  return <p className={context.theme}>Test useContext hook</p>;
}

export default Paragraph;
