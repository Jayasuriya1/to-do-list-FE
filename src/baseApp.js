import React, { useContext, useState } from "react";
import "boxicons";
import { Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { AppContext } from "./Context/AppProvider";
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';



export default function BaseApp({children}) {
  const { user } = useContext(AppContext);

  const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }));
  
    const [isOpen, setIsOpen] = useState(false)
    const toggle = ()=>{
        setIsOpen(!isOpen)
        console.log("working")
    }
  return (
    <div className="baseContainer">
      <div className="topBar" >
        
          <div className="topBar-baseStyle menu" onClick={toggle}>
            <div className="menu-hover">
            <i className="bx bx-menu bx-sm" style={{ color: "#5f6368" }}></i>
            </div>
          </div>
          <div className="topBar-baseStyle logo">
            <i className="bx bxs-book-open bx-lg" style={{ color: "#FBBC04" }}></i>
            <span className="logo-name">
                <span className="logoFirstLetter">N</span>
                otify
            </span>
          </div>
        
        <div className="topBar-baseStyle profile">
        <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">Tooltip with HTML</Typography>
            <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
            {"It's very engaging. Right?"}<button>{"Logout"}</button>
          </React.Fragment>
        }
      >
        <Avatar sx={{ bgcolor: "#b26500" }}>{user && user.user.name?.charAt(0)}</Avatar>
      </HtmlTooltip>
            
        </div>
        
      </div>
      <div className="sideBarContainer" >
        <div className="sideBar" id="top-bar"  style={{width:isOpen?"300px":"80px"}}>
          <div tabIndex="1" className="sideBarLink" >
            <i className="bx bx-edit bx-xs" style={{ color: "#5f6368" }}></i>
            <span style={{display:isOpen?"inline":"none"}}>Notes</span>
          </div>
          <div tabIndex="1" className="sideBarLink"  >
            <i className="bx bx-list-check bx-xs" style={{ color: "#5f6368" }}></i>
            <span  style={{display:isOpen?"inline":"none"}}>To Do List</span>
          </div>
        </div>
        <div className="mainContainer">
          {children}
        </div>
      </div>
    </div>
  );
}
