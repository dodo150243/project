import './NatureItem.css';
function NatureItem(props) {
    const { nature, onNatureClick } = props;
    return (
        <div className="nature-item">
            <img src={nature.thumbnailUrl} onClick={() => onNatureClick(nature)} />
            <h4>{nature.title}</h4>
        </div>
    );
}

export default NatureItem; //เพื่อนำไปแสดงใน ไฟล์ App.js