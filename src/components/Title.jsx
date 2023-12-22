import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { TiThLargeOutline } from "react-icons/ti";
import { FaTh } from "react-icons/fa";

import React from "react";

const Title = () => {
  return (
    <div className="container-fluid px-3">
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <h2 className="mx-2">TV Shows</h2>

          <DropdownButton
            className="dropdown ml-4 mt-1 mx-3 rounded-0"
            variant="primary"
            title="Genres"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <Dropdown.Item active className="dropdown text-dark bg-white">
              Comedy
            </Dropdown.Item>
            <Dropdown.Item className="dropdown text-dark bg-white">Drama</Dropdown.Item>
            <Dropdown.Item className="dropdown text-dark bg-white">Thriller</Dropdown.Item>
          </DropdownButton>
        </div>

        <div>
          <div className="d-flex">
            <TiThLargeOutline className="iconsHeader mx-3" />
            <FaTh className="iconsHeader mx-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
