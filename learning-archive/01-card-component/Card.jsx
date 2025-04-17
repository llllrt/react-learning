import profilePic from './assets/jayson-tatum.webp'


function Card() {
    return (
        <div className="card">
            <img className='card-image' src={profilePic} alt="profile picture" />
            <h2 className='card-title'>Jason Tatum</h2>
            <p className='card-text'>杰森·克里斯多福·塔图姆，出生于美国密苏里州东部城市圣路易斯，为现役美国职业篮球运动员，目前效力于NBA联盟的波士顿凯尔特人。</p>
        </div>
    );
}

export default Card;