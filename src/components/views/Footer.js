import React from "react";
import PropTypes from "prop-types";
import "styles/views/Footer.scss";

/**
 * This is an example of a Functional and stateless component (View) in React. Functional components are not classes and thus don't handle internal state changes.
 * Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.
 * They are reusable pieces, and think about each piece in isolation.
 * Functional components have to return always something. However, they don't need a "render()" method.
 * https://reactjs.org/docs/components-and-props.html
 * @FunctionalComponent
 */
const Footer = props => (
  <div className="footer container" style={{height: props.height}}>
    <h1 className="footer title">
      {props.content}
    </h1>
  </div>
);

Footer.propTypes = {
  height: PropTypes.string,
  content: PropTypes.string
};

/**
 * Don't forget to export your component!
 */
export default Footer;
