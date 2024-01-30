import * as React from "react";
import { CopyBlock } from "react-code-blocks";

export default function Home() {
  const hello = "User-based Nav Demo";

  return (
    <>
      <h1 className="title">{hello}</h1>
      <p>
        App passes a user role to nav component. (Assumes that if the agency changes, the user
        role changes). 
      </p>
      <p>
        The nav component passes that user role id value to the
        api to return an array of menu items, and generates a nav bar from those
        items.
      </p>
      <h2> 1. gui has user data </h2>
      <p>Initially I was assuming the gui could get access to the data returned from the /login endpoint:
      </p>
 
      <CopyBlock
        wrapLines={true}
        text="{
          id: 1, 
          username: 'test user', 
          agencies: [{
                id: 1, 
                state: {}, 
                user_type: {id: 1, name: 'Read-only'}
          }]
        }"
      />
      
      <p>But I don't think the gui uses this endpoint so maybe it would be better for the api 
        to accept a user id + agency id combo.
      </p>
      
      <h2>2. pass that user_type.id or user id + agency id combo for the selected agency to the api</h2>
      
      <h2>3. get an array of menu items</h2>
      <CopyBlock
        wrapLines={true}
        text="[
          {
            name: 'Settings',
            path: '/settings',
            children: [
              {
                name: 'My Account',
                path: '/settings/account',
                children: [
                  {
                    name: 'Personal Information',
                    path: '/settings/account/personal'
                  }
                ]
              }
            ],
          },
          {
            name: 'Help',
            path: '/help'
          }
        ]"
      />
      <h2>Build menu (see code in src/components/nav.jsx)</h2>

    </>
  );
}
