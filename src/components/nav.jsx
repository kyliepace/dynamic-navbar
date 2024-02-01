import React, { useState, useEffect } from "react";
import Icon from "./icon";

const API_URL = "https://jsonplaceholder.typicode.com/users"; // just using this for realism even though I'm ignoring its data

export default function Nav({ user }) {
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    const endpoint = `${API_URL}/${user.user_type.id}`; // pass user's auth level for given agency to api
    fetch(endpoint)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // returned from menu table
        const fakeData = [
          {
            name: "Settings",
            path: "/settings",
            children: [
              {
                name: "My Account",
                path: "/settings/account",
                children: [
                  {
                    name: "Personal Information",
                    path: "/settings/account/personal",
                  },
                ],
              },
            ],
          },
          {
            name: "Help",
            path: "/help",
          },
        ];
        setMenuItems(fakeData);
      });
  }, [user]);
  return (
    <div>
      <ul style={{listStyleType: "none"}}>
        {menuItems.map((item) => (
          <MenuItem {...item} />
        ))}
      </ul>
    </div>
  );
}

function MenuItem({ path, name, children }) {
  return (
    <li key={name}>
      <div style={{ display: "flex" }}>
        <Icon name={name}/>
        <a href={path}>{name}</a>
      </div>

      {children?.map((child) => (
        <ul style={{listStyleType: "none"}}>
          <MenuItem {...child} />
        </ul>
      ))}
    </li>
  );
}
