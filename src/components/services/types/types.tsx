export interface INavbarElement {
  name: string;
  link: string;
  section: string;
}

export interface ISlider {
  text: string;
  icon: JSX.Element;
  activeIcon: JSX.Element;
  children?: JSX.Element;
  linkActive: string;
}