// @ts-nocheck
// card component
// import image from './assets/image.png'
import sh from './assets/madhu.png'


function Card() {

    return (
        <div className="card">
            {/* <img className="card-image" src="https://via.placeholder.com/150" alt="profile picture"></img> */}
            <img  src={sh} alt="profile picture"></img>
            <h2 className="card-title">MadhuSudhanaRao</h2>
            <p className="card-text">Hero and True Topper of VIT-AP</p>
      </div>  
    );
    
}
export default Card