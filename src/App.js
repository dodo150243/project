//ไฟล์นี้ เป็น ไฟล์ JSX คือ javascript ที่สามรถใส่ code html เข้าไปได้โดยตรง
import { useState } from 'react';
import './App.css';  //ไฟล์ App.css เพื่อใช้ตกแต่ง เฉพาะไฟล์ App นี้เท่านั้น
import AppHeader from './components/AppHeader'; //เรียกใช้ไฟล์ AppHeader.js
import AppSearch from './components/AppSearch';
import NatureItem from './components/NatureItem'; //เรียกใช้ไฟล์ NatureItem.js
import NaturePost from './components/NaturePost'; //เรียกใช้ไฟล์ NaturePost.js
import natures from './data/natures';


function App() {
    const [selectedNature, setSelectedNature] = useState(null);
    const [searchText, setSearchText] = useState('');

    function onNatureOpenClick(nature) {
        setSelectedNature(nature);
    }

    function onNatureCloseClick() {
        setSelectedNature(null);
    }

    const natureItems = natures.filter((nature) => {
        return nature.title.includes(searchText);
    }).map((nature, index) => {
        return <NatureItem key={index} nature={nature} onNatureClick={onNatureOpenClick} />;
    });

    let naturePost = null;
    if (!!selectedNature) {
        naturePost = <NaturePost nature={selectedNature} onBgClick={onNatureCloseClick} />;
    }

    return (
        <div className="app">
            <AppHeader /> {/** ส่วนของไฟล์ AppHeader.js เรียกใช้ที่ import มา*/}
            <section className="app-section">
                <div className="app-container">
                    <AppSearch value={searchText} onValueChange={setSearchText} />
                    <div className="app-grid">
                        {natureItems}
                    </div>
                </div>
            </section>
            {naturePost}
        </div>
    );
}

export default App;