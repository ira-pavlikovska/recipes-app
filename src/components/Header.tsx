import React from 'react';
import {useAppSelector} from "../hooks/useAppSelector";
import {RootState} from "../store";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Logout from '@mui/icons-material/Logout';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useNavigate} from "react-router-dom";


export default function Header() {
    let navigate = useNavigate();
    const {user} = useAppSelector((state: RootState) => state.userReducer);

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogout = () => {
        navigate('/')
    }
    const handleManageAccount = () => {
        navigate('/personalAccount')
    }

    return (
        <React.Fragment>
            <div style={{display: 'flex'}}>
                  <span style={{
                      color: 'rgba(0, 0, 0, 0.6)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flex: 11
                  }}>
                        <h2>
                            {user.firstName + "'" +
                            's'} Recipes book
                        </h2>
                    </span>
                <span style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
    <Tooltip title="Account settings">
        <IconButton
            onClick={handleClick}
            size='small'
            sx={{ml: 2}}
        >
            <AccountCircleIcon fontSize="large"/>
        </IconButton>
    </Tooltip>

</span>

            </div>

            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
            >
                <MenuItem>
                    <ListItemIcon>
                        <Logout
                            fontSize="small"
                            onClick={handleLogout}
                        />
                    </ListItemIcon>
                    Logout
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <ManageAccountsIcon
                            fontSize="small"
                            onClick={handleManageAccount}
                        />
                    </ListItemIcon>
                    Account info
                </MenuItem>

            </Menu>
        </React.Fragment>
    );
}



