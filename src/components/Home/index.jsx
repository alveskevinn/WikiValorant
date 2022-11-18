import "./Home.css";

const Home = () => {
  return (
    <div className="sides">
      <div className="homeLeft">
        <p>Hello player,</p>
        <p>Welcome to WikiValorant</p>
        <div className="valorantLogo">
          <img src="../../../public/imgs/-41603133883ydovxsyb6r.png" alt="" />
        </div>
        <div className="subtitle">
            <p>A simple unofficial guide to valorant where you will find information about weapons, agensts, maps and their in-game stats, learn more about the project by clicking the buttons below.</p>
        </div>
        <button className="button">About Project</button>
      </div>
      <div className="homeRight">
        <img src="../../../public/imgs/reyna.png" alt="" />
      </div>
      <div>
      </div>
    </div>
  );
};
export default Home;
