import Qr_image from '../assets/image-qr-code.png'

const QR_container = () => {
  return (
    <div className="container">
      <img src={Qr_image} alt="" width="250px" />
      <p className="main">Improve your front-end skills by building projects</p>

      <p className="sub">
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  )
}
export default QR_container
