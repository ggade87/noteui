import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";
const initialState = {
  token: null,
  userId: null,
  mainMenu: [
    { _id: "63c6a2866756e2296815939d", userId: "1", name: "Menu1" },
    { _id: "63c6a2866756e22968159392", userId: "2", name: "Menu2" },
    { _id: "63c6a2866756e22968159393", userId: "3", name: "Menu3" },
    { _id: "63c6a2866756e22968159394", userId: "4", name: "Menu4" },
  ],
  sunMenu: [
    {
      _id: "63be61e54e92ca8934ad4271",
      mid: "63c6a2866756e2296815939d",
      name: "sunMenu1",
    },
    {
      _id: "63be61e54e92ca8934ad4272",
      mid: "63c6a2866756e2296815939d",
      name: "sunMenu2",
    },
    {
      _id: "63be61e54e92ca8934ad4273",
      mid: "63c6a2866756e2296815939d",
      name: "sunMenu3",
    },
    {
      _id: "63be61e54e92ca8934ad4274",
      mid: "63c6a2866756e22968159392",
      name: "sunMenu1",
    },
    {
      _id: "63be61e54e92ca8934ad4275",
      mid: "63c6a2866756e22968159392",
      name: "sunMenu2",
    },
  ],
  filteredSubMenu: [],
  content: [
    {
      _id: "63c6a2ba6756e229681593a1",
      smid: "63be61e54e92ca8934ad4271",
      name: "How are you?",
      value: "I am fine Thanks",
    },
    {
      _id: "63c6a2ba6756e229681593a2",
      smid: "63be61e54e92ca8934ad4271",
      name: "How are you?",
      value: "I am fine Thanks",
    },
    {
      _id: "63c6a2ba6756e229681593a3",
      smid: "63be61e54e92ca8934ad4274",
      name: "How are you?",
      value: "I am fine Thanks",
    },
  ],
  filteredContent: [],
};
const GetMainMenu = (state: any, action: any) => {
  const mid = action.payload;
  const sMenu = [...state.sunMenu];

  const data = sMenu.filter((x) => x.mid === mid);
  return updateObject(state, { filteredSubMenu: data });
};

const GetContent = (state: any, action: any) => {
  const smid = action.payload;
  const content = [...state.content];

  const data = content.filter((x) => x.smid === smid);
  return updateObject(state, { filteredContent: data });
};

const authLogout = (state: any, action: any) => {
  return updateObject(state, { token: null, userId: null });
};
const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.GET_MAIN_MENU:
      return GetMainMenu(state, action);
    case actionTypes.GET_CONTENT:
      return GetContent(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    default:
      return state;
  }
};

export default reducer;
