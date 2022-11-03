import { useContext } from 'react';
import { Image } from 'react-bootstrap';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarContent,
} from 'react-pro-sidebar';
import { useNavigate, useLocation } from 'react-router-dom';
import { LangContext } from '../../context/Lang';
import { VariableContext } from '../../context/Variable';
import { IconHome, IconInfo } from '../icon';


const Sidebar = () => {
    const navigate = useNavigate()
    const [variable] = useContext(VariableContext)
    const { dispatch: { translate } } = useContext(LangContext);
    const { pathname } = useLocation()
    const splitLocation = pathname.split('/')[1]

    const goPage = (route: string) => {
        navigate(route);
    }

    return (
        <div className="sidebar">
            <ProSidebar collapsed={variable?.isSidebarActive} breakPoint="xs" >
                <SidebarContent>
                    <Menu iconShape="circle">
                        <MenuItem icon={<IconHome />} active={splitLocation === 'home'} onClick={() => goPage(`/home`)}>{translate('home')}</MenuItem>

                        <MenuItem icon={<IconInfo />} active={splitLocation === 'about'} onClick={() => goPage(`/about`)}>{translate('about')}</MenuItem>
                    </Menu>
                </SidebarContent>
            </ProSidebar>
        </div >
    );
};

export default Sidebar;
