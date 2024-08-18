import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "./content.css";
import ContentDetails from "./content-details/content-details";
import { getSubMenu } from "../store/actions/actions";
import Home from "../pages/Home";
import { ISubMenu } from "../BAL/Type";
const Content = () => {
  const dispatch = useDispatch();
  const [subMenuId, setSubMenuId] = useState("");
  const filteredSubMenu = useSelector(
    (state: any) => state.home.filteredSubMenu
  );
  const { id } = useParams();
  useEffect(() => {
    handleToggle(id);
    setSubMenuId("");
  }, [id]);
  const handleToggle = (id: string | undefined) => {
    debugger;
    dispatch(getSubMenu(id));
  };
  return (
    <div>
      <h1>Content{id}</h1>
      <div className="row">
        <div className="column1">
          <h2>Column Content 11</h2>
          <div className="vertical-menu">
            <ul>
              {filteredSubMenu &&
                filteredSubMenu.map((data: ISubMenu, index: number) => {
                  return (
                    <li key={index}>
                      <button
                        className="nav-link active"
                        onClick={() => setSubMenuId(data._id)}
                      >
                        {data.name}
                      </button>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
        <div className="column2">
          <h2>Column Content 22</h2>
          <ContentDetails subMenuId={subMenuId} />
        </div>
      </div>
    </div>
  );
};

export default Content;
