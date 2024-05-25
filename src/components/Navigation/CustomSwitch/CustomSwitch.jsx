import { useState } from 'react';
import { Switch } from 'antd';

import style from './CustomSwitch.module.scss';

const CustomSwitch = () => {
    const [toggleDarkTheme, setToggleDarkTheme] = useState(false);

    return (
        <div className={style.switch_box}>
            <Switch
                onChange={() => setToggleDarkTheme(!toggleDarkTheme)}
                className={style.switch_styles}
                checked={toggleDarkTheme}
            />
            <p>{toggleDarkTheme ? 'Dark Mode' : 'Light Mode'}</p>
        </div>
    );
};

export default CustomSwitch;
