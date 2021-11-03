import React from "react";
import * as BsIcons from "react-icons/bs";
import * as RiIcons from "react-icons/ri";
  
export const SidebarData = [
  {
    title: "Menu",
    path: "/menu",
    icon: <BsIcons.BsFillPeopleFill />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  
    subNav: [
      {
        title: "User",
        path: "/menu/user",
        icon: <BsIcons.BsFillPeopleFill />,
      },
    ],
  },
];
