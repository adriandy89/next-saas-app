import { IMenuItem } from "@/app/interfaces";

export const menu: IMenuItem[] = [
  {
    text: "New",
    icon: "plus",
    route: "/new",
  },
  {
    text: "Posts",
    icon: "notebook-text",
    route: "/posts",
  },
  {
    text: "Profile",
    icon: "user",
    route: "/profile",
  },
];
