import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IMainMenu } from "../../../BAL/Type";
import "./MainMenuForm.css";
const MainMenuForm = () => {
  const mainMenu = useSelector((state: any) => state.home.mainMenu);
  const [selectValue, setSelectValue] = useState("");
  const [tempId, setTempId] = useState("");
  const [name, setName] = useState("");
  useEffect(() => {}, [mainMenu]);
  const handleSubMenuDelete = (id: string, name: string) => {
    //Delete main menu - Delete Content -> Delete Sub Menues -> Delete Main Menu.
    if (window.confirm("Are you sure to delete this record?")) {
      console.log("Code for Delete" + id + name);
      //this.props.onSubMenuDelete(name,id);
    }
  };
  const handleCancel = () => {
    setTempId("");
    setName("");
  };
  const handleSubMenuSave = (id: string) => {
    // this.props.onSubMenuUpdate(this.state.name,id);
    // this.setState({selectValue:this.state.name});
    // this.props.onSubMenuLoad(this.state.name);
    setTempId("");
    setName("");
  };
  const handleInput = (event: Event) => {
    setName("");
    //this.setState({tempId:""});
  };
  const handleEdit = (id: string, name: string) => {
    setTempId(id);
    setName(name);
  };
  return (
    <div className="MainMenuDiv">
      <h1>MainMenuForm</h1>
      <nav>
        <ul>
          {mainMenu &&
            mainMenu.map((data: IMainMenu, index: number) => {
              return (
                <li key={index}>
                  <table>
                    <tr>
                      <td>
                        {tempId === data._id ? (
                          <input
                            name={data._id}
                            type="text"
                            value={name}
                            onChange={(event) => handleInput}
                          ></input>
                        ) : (
                          data.name
                        )}
                      </td>
                      <td>
                        {tempId === data._id ? (
                          <div>
                            <button onClick={() => handleSubMenuSave(data._id)}>
                              Save
                            </button>{" "}
                            / <button onClick={handleCancel}>Cancel</button>
                          </div>
                        ) : (
                          <div>
                            <button
                              onClick={() => handleEdit(data._id, data.name)}
                              style={{ color: "green" }}
                              className="btn btn-link"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Edit"
                            >
                              Edit
                            </button>
                            <button>Delete</button>
                          </div>
                        )}
                      </td>
                      <td></td>
                    </tr>
                  </table>
                </li>
              );
            })}
        </ul>
      </nav>
    </div>
  );
};

export default MainMenuForm;
