import box from '../images/illustration-box-desktop.svg'


export const ImageWrapper = () => {
  return (
    <div className="image__wrapper">
      <div className="image__wrapper_inner"></div>
      <img className="box" src={box} alt="box"/>
    </div>
  );
}