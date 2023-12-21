import React, {useState, useEffect} from 'react'
import Image from 'next/image';
import Link from 'next/link';

//Import Icons
import { MdNotifications } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import { CgMenuLeft, CgMenuRight } from 'react-icons/cg';

//Internal Import
import Style from './NavBar.module.css';
import {
    Discover,
    HelpCenter,
    Notification,
    Profile,
    SideBar
} from './index';
import { Button } from '../components.index';

const NavBar = () => {
    return (
        <div>NavBar</div>
    )
};

export default NavBar;