import './NaturePost.css';
function NaturePost(props) {
    const { nature, onBgClick } = props;
    return (
        <div className="nature-post">
            <div className="nature-bg" onClick={onBgClick} />
            <div className="nature-content">
                <img src={nature.fullUrl} />
                <h3>{nature.title}</h3>
            </div>
        </div>
    );
}

export default NaturePost;