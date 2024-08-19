import React, { useState } from "react";
import "./Account.css";
import Page from "../../hoc/SwitchingComponent";
const Account = () => {
  const [page, setPage] = useState("MyAccount");
  return (
    <div>
      <div className="row">
        <div className="column1">
          <div className="vertical-menu">
            <ul>
              <li>
                <button onClick={() => setPage("MyAccount")}>Account</button>
              </li>
              <li>
                <button onClick={() => setPage("MainMenuForm")}>
                  Main Menu
                </button>
              </li>
              <li>
                <button onClick={() => setPage("SubMenuForm")}>Sub Menu</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="column2">
          <Page page={page}></Page>
        </div>
      </div>
    </div>
  );
};

export default Account;
