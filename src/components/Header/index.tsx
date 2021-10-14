import {Button} from "../Button";
import {Profile} from "../Profile";
import React from "react";
import Camera from '../../assets/camera.png';
import Settings from '../../assets/settings.png';
import style from './style.module.css';

export const Header: React.FC = () => {
    return <div className={style.header}>
        <Button type={'circle'} icon={Camera}/>
        <div className={style.header__profile}>
            <Profile />
        </div>
        <Button type={'circle'} icon={Settings}/>

    </div>
}