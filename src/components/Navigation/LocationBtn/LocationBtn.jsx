import style from './LocationBtn.module.scss';
import LocationImg from '/current-location-icon.svg';

const LocationBtn = () => {
    return (
        <button className={style.btn_style} onClick={() => console.log("Pobierz geolokalizację")}>
            <img src={LocationImg} alt="" />
            <p>Current Location</p>
        </button>
    );
};

export default LocationBtn;