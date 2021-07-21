
import './App.css';
import Aside                 from './components/Body/Aside/Aside';
import Body                  from './components/Body/Body';
import Footer                from './components/Footer';
import Header                from './components/Body/Main/Header/Header';
import Main                  from './components/Body/Main/Main';
import AsideUserList         from './components/Body/Aside/AsideUserList/AsideUserList';
import SidebarOptionalMenue  from './components/Body/Aside/SidebarOptionalMenue';
import SkillsAndEndorsements from './components/Body/Main/SkillsAndEndorsements/SkillsAndEndorsements';
import Experiences from './components/Body/Main/Experiences/Experiences';
import TopNavbar             from './components/Navbar/TopNavbar';

function App () {
    return (
        <div className="App">

            <TopNavbar />
            <Body>
                <Main>

                    <Header />
                    <SkillsAndEndorsements 
                        title='Skills & endorsements' 
                        crud ='edit' 
                        add  ='Add a new skill'
                    />
                    <Experiences 
                        title='Experiences'
                        crud ='add'
                    />
                    
                </Main>

                <Aside>
                    <SidebarOptionalMenue />
                    <AsideUserList title='People also viewed' />
                    <AsideUserList title='People you may know' />
                </Aside>
            </Body>
            <Footer />
        </div>
    );

}

export default App;
