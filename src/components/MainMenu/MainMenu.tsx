import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./MainMenu.css";
import { IMainMenu } from "../BAL/Type";
const MainMenu = () => {
  //const dispatch = useDispatch();
  const mainMenu = useSelector((state: any) => state.home.mainMenu);
  useEffect(() => {}, [mainMenu]);
  return (
    <div>
      <header>
        <nav>
          <ul>
            {mainMenu &&
              mainMenu.map((data: IMainMenu, index: number) => {
                return (
                  <li key={index}>
                    <Link to={`/content/${data._id}`}>{data.name}</Link>
                  </li>
                );
              })}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default MainMenu;
