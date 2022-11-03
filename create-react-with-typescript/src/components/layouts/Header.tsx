import { Image, Navbar } from 'react-bootstrap'
import { useContext } from "react";
import { LangContext } from '../../context/Lang';
import { IconMenu } from '../icon';
import { VariableContext } from '../../context/Variable';
import { useNavigate } from 'react-router-dom';


function Header({ title }: { title: string }) {
    const navigate = useNavigate()
    const [variable, setVariable] = useContext(VariableContext)
    const { state: { language }, dispatch: { setLanguage } } = useContext(LangContext);
    const chooseLanguageHandler = (value: string) => {
        setLanguage(value);
    }

    const toggle = () => {
        setVariable({ ...variable, isSidebarActive: !variable?.isSidebarActive })
    }

    return (
        <Navbar className="header bg-white shadow-sm px-4  d-flex justify-content-between">
            <div className="d-flex align-items-center">
                <span className="primary-text fs-10 me-3 cursor" onClick={toggle}><IconMenu /></span>
                <h6 className="m-0 fw-bold text-primary">{title}</h6>
            </div>
            <div className='d-flex'>
                <div className="d-flex align-items-center me-4">
                    {language === "EN" ? <label className="cursor" onClick={() => chooseLanguageHandler('MM')}><Image src={'images/lang/flag-eng-vn.svg'} width="25" className="me-2" /></label>
                        :
                        <label className="cursor" onClick={() => chooseLanguageHandler('EN')}><Image src={'images/lang/flag-eng-vn.svg'} width="25" className="me-2" /></label>
                    }
                </div>
                <span className="text-muted ms-2 cursor" onClick={() => navigate('/')}>Logout</span>
            </div>
        </Navbar>
    );
}

export default Header
