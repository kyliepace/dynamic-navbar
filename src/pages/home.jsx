import * as React from "react";
import { CopyBlock } from "react-code-blocks";

export default function Home() {
  const hello = "Hello React User-based Nav bar!";

  return (
    <>
      <h1 className="title">{hello}</h1>
      <p>
        App passes a user role to nav component. If the agency changes, the user
        role changes. The nav component passes that user role id value to the
        api to return an array of menu items, and generates a nav bar from those
        items.
      </p>
      <h2> 1. data returned from /login </h2>
      <p>Of course the gui isn't using the /login endpoint (?) so need to make sure 
      this data is available to it via webservices or other way
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
      
      <h2>2. pass that user_type.id for the selected agency to the api</h2>
      
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
