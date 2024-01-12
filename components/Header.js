import React from 'react'
import { MenuMenu, MenuItem, Menu  } from 'semantic-ui-react'
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <Menu style ={{marginTop: '20px'}}>
        <MenuItem
           onClick={() => router.push("/")}
        >
          CrowdCoin
        </MenuItem>

        <MenuMenu position='right'>
          <MenuItem
            onClick={() => router.push("/")}
          >
            Campaigns
          </MenuItem>

          <MenuItem
            onClick={() => router.push("/campaigns/new")}
          >
            +
          </MenuItem>
        </MenuMenu>
      </Menu>
  )
}

export default Header