import React from "react";
import cn from "classnames";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./Panel.module.sass";
import Icon from "../Icon";

const navigation = [
    {
        title: "Stays",
        url: "/",
    },
    {
        title: "Flights",
        url: "/flights",
    },
    {
        title: "Cars",
        url: "/cars",
    },
    {
        title: "Things to do",
        url: "/things-to-do",
    },
];

const Panel = ({
    className,
    menu,
    classBody,
    children,
    onSearch,
    classButtonSearch,
}) => {
    const { pathname } = useLocation();

    return (
        <div className={cn(className, styles.panel)}>
            <div className={styles.background}></div>
            {menu && (
                <div className={styles.nav}>
                    {navigation.map((x, index) => (
                        <NavLink
                            className={cn(styles.link, {
                                [styles.active]: pathname === x.url,
                            })}
                            to={x.url}
                            key={index}
                        >
                            {x.title}
                        </NavLink>
                    ))}
                </div>
            )}
            <div className={cn(styles.body, classBody)}>
                {children}
                <button
                    className={cn(classButtonSearch, styles.search)}
                    onClick={onSearch}
                >
                    <Icon name="search" size="24" />
                </button>
            </div>
        </div>
    );
};

export default Panel;
