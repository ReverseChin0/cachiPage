import "../styles/UnderConstruction.css"

const UnderConstruction = () => {
  return (
    <div className="uc-bg">
      <div className="uc-content">
        <img className="uc-mainImg" src="/img/underConstruction/weareworking.png" alt="" />        
        <svg viewBox="0 0 400 25">
          <text className="uc-large" x="50%" y="50%" width="100%" height="100%">Oops. It’s not quite ready yet!</text>
        </svg>
        <svg viewBox="0 0 400 25">
          <text className="uc-medium" x="50%" y="50%" width="100%" height="100%">Videogames and websites take time...</text>
        </svg>
        <div></div>
        <svg viewBox="0 0 400 25">
          <text className="uc-small" x="50%" y="50%" width="100%" height="100%">Follow us:</text>
        </svg>        
        <div className="uc-links">
          <a target="blank" href="https://docs.google.com/spreadsheets/d/1ozg1Cnm6SdtM4M5rATkANAi07xAzYWaKL7HKxyvoHzk/edit?gid=1380702445#gid=1380702445">
            <img src="/img/underConstruction/icons8-bluesky-50.png" alt="" />
          </a>
          <a target="blank" href="https://docs.google.com/spreadsheets/d/1ozg1Cnm6SdtM4M5rATkANAi07xAzYWaKL7HKxyvoHzk/edit?gid=1380702445#gid=1380702445">
            <img src="/img/underConstruction/icons8-instagram-50.png" alt="" />
          </a>
          <a target="blank" href="https://docs.google.com/spreadsheets/d/1ozg1Cnm6SdtM4M5rATkANAi07xAzYWaKL7HKxyvoHzk/edit?gid=1380702445#gid=1380702445">
            <img src="/img/underConstruction/icons8-tiktok-50.png" alt="" />
          </a>
          <a target="blank" href="https://docs.google.com/spreadsheets/d/1ozg1Cnm6SdtM4M5rATkANAi07xAzYWaKL7HKxyvoHzk/edit?gid=1380702445#gid=1380702445">
            <img src="/img/underConstruction/icons8-x-50.png" alt="" />
          </a>          
        </div>

        <div className="uc-footer"></div>
        
      </div>
    </div>
  )
}

export default UnderConstruction