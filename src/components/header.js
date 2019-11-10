import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopy,
  faAddressCard,
  faTasks
} from "@fortawesome/free-solid-svg-icons";

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        {/** Header Item Components Here */}
        <div className="header-item">
          <p className="grow">Projects</p>
          <FontAwesomeIcon icon={faTasks} className="grow icon" size="3x" />
        </div>
        <div className="header-item">
          <p className="grow">Contact</p>
          <FontAwesomeIcon
            icon={faAddressCard}
            className="grow icon"
            size="3x"
          />
        </div>
        <div className="header-item">
          <p className="grow">Resume</p>
          <FontAwesomeIcon icon={faCopy} className="grow icon" size="3x" />
        </div>
      </div>
    );
  }
}
