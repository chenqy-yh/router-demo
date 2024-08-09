import React from "react";
import { Link } from "react-router-dom";

type LinkProps = {
    to: string;
    children: React.ReactNode;
    style?: React.CSSProperties;
}

const defaultStyle: React.CSSProperties = {
    textDecoration: 'none',
    color: '#1a1a1a'
};

const QLink: React.FC<LinkProps> = (props) => {
    const { to, children, style } = props;
    return <Link style={{ ...defaultStyle, ...style }} to={to}>{children}</Link>;
}

export {
    QLink
};
