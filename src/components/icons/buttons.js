import React from "react";
import {ReactComponent as RSSIcon} from "./rss.svg";
import {ReactComponent as FacebookIcon} from "./facebook.svg";
import {ReactComponent as TwitterIcon} from "./twitter.svg";
import {ReactComponent as DribbbleIcon} from "./dribbble.svg";
import {ReactComponent as PinterestIcon} from "./pinterest.svg";

const socialIcons = {
    rss: RSSIcon,
    facebook: FacebookIcon,
    twitter: TwitterIcon,
    dribbble: DribbbleIcon,
    pinterest: PinterestIcon
}

export default function SButtons(target, className = 'social-pictogram-default') {
    const Component = target in socialIcons ? socialIcons[target] : null;
    return Component ? <Component className={className} /> : null;
}
