import './App.css';
import Profile from './profile/Profile';
const handleName  = name => alert(name);

function App() {
  return (
    <div style={{backgroundColor: "#E7E0C9" , textAlign:"center"}} >
      <br></br>
     <Profile name="amine dakhlia" profession="Software Engineer" bio="Full Stack Developer" handleName={handleName}><img src="https://i.pinimg.com/474x/17/d7/a2/17d7a2d33bc4c3ac756cb8311451bb00.jpg"alt="Profile Picture"  width="350px" height="350px" /></Profile> 
    </div>
  );
}

export default App;