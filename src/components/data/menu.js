import {RiHome7Fill, RiHashtag, RiUser3Line} from "react-icons/ri";


const list = [
    {
        title: "Home",
        icon: <RiHome7Fill className="menu-icon" />,
        active: false,
        url: "/",
        endpoint: null
    },
    {
        title: "Explore",
        icon: <RiHashtag className="menu-icon" />,
        active: false,
        url: "/explore",
        endpoint: null
    },
    {
        title: "Profile",
        icon: <RiUser3Line className="menu-icon" />,
        active: true,
        url: "/profiles",
        endpoint: "profile"
    }
];

export default list;