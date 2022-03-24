import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillCursorFill } from "react-icons/bs";
import { AiOutlineBell } from "react-icons/ai";

const Edit = () => {
  return <div>
  <div className="form-tilte">
  <div className="search-input">
  <input type="text" name="searchbar"  placeholder="Search a course"/>
  <div className="icons" style={{marginTop:42}}><AiOutlineSearch/></div>
  <div className="icon2"><AiOutlineBell/></div>
  <div className="for-pepole"> </div>
  </div> 
  </div>
  </div>;
};

export default Edit;
