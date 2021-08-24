import './AppHeader.css';
function AppHeader() {  //ฟังก์ชัน AppHeader
    return (
        <header className="app-header"> {/**ประกาศ class  เพื่อตกแต่งในไฟล์ App.css */}
            <h2>Nature</h2>  {/**กำหนดข้อความบน Header */}
        </header>
    )
}
export default AppHeader; //เพื่อนำไปแสดงใน ไฟล์ App.js