export interface IMainMenu {
  _id: string;
  userId: string;
  name: string;
}
export interface ISubMenu {
  _id: string;
  mid: string;
  name: string;
}

export interface IContent {
  _id: string;
  smid: string;
  mid: string;
  name: string;
  value: string;
}
