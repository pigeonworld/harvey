import HeaderPhoto from '../assets/pictures/header.jpg'

export default function Home() {
  return (
    <>
        <div className="header-container">
        <h1 className="main-title">harvey streets</h1>
            <h2 className="subtitle">my name is harvey streets and i am not a software engineer</h2>
            <img className="header-photo" src={HeaderPhoto} alt="harvey streets" />
        </div>
        <div className="about-container">
            <h2 className="about-title">things i can actually do</h2>
            <ul className="about-list">
                <li>i can play pool online</li>
                <li>i have eat a whole pizza by myself</li>
                <li>i can do much</li>
            </ul>
        </div> 
    </>
  )
}