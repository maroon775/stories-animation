import {Button} from "../Button";
import {Profile} from "../Profile";
import React from "react";

export const Header: React.FC = () => {
    return <>
        <Button>AddPhoto</Button>
        <Profile />
        <Button>Settings</Button>
    </>
}