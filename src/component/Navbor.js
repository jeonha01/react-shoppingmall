import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './component.css';

const Navbar = ({ authenticate, setAuthenticate }) => {
    const menuList = [
        "SUMMER PANTS",
        "ALL",
        "NEW",
        "MADE",
        "BEST",
        "당일출고",
        "OUTER",
        "TOP",
        "BOTTOM",
        "SHOES & BAG",
        "ACC",
    ];
    let [width, setWidth] = useState(0);
    let [overlayVisible, setOverlayVisible] = useState(false);
    let navigate = useNavigate();
    const onCheckEnter = (event) => {
        if (event.key === "Enter") {
            navigate(`?q=${event.target.value}`);
        }
    };

    const openMenu = () => {
        setWidth(305);
        setOverlayVisible(true);
        document.body.classList.add('no-scroll'); // 스크롤 비활성화
    }

    const closeMenu = () => {
        setWidth(0);
        setOverlayVisible(false);
        document.body.classList.remove('no-scroll'); // 스크롤 재활성화
    }

    const loginnavi = () => {
        navigate("/login")
        closeMenu()
    }

    const logoutnavi = () => {
        setAuthenticate(false)
        closeMenu()
    }

    const productSearch = (event) => {
        onCheckEnter(event)
        setAuthenticate(false)
        closeMenu()
    }


    // 사이드 메뉴가 닫힐 때 스크롤을 재활성화하는 효과
    useEffect(() => {
        return () => document.body.classList.remove('no-scroll');
    }, []);

    return (
        <div>

            <div className={`overlay ${overlayVisible ? 'visible' : ''}`} onClick={closeMenu}></div>
            <div className="side-menu" style={{ width: width }}>
                <button className="closebtn" onClick={closeMenu}>
                    &times;
                </button>

                <div className="side-menu-list" id="menu-list">
                    {authenticate ? (
                        <div className='login-button' onClick={logoutnavi}>

                            <span style={{ cursor: "pointer" }}>Logout</span>
                        </div>
                    ) : (
                        <div className='login-button' onClick={loginnavi}>

                            <span style={{ cursor: "pointer" }}>Login</span>
                        </div>
                    )}
                    {menuList.map((menu, index) => (
                        <button key={index}>{menu}</button>
                    ))}
                    <div className="search-box">
                        <input className="search-text" type="text" placeholder="Search" onKeyPress={productSearch} />
                    </div>
                </div>

            </div>
            <div className="header">
                <div className="hidelogo hide" onClick={() => navigate('/')}>N A R E U M</div>
            </div>
            <div className="nav-header">
                <div className="burger-menu hi">
                    <FontAwesomeIcon icon={faBars} onClick={openMenu} />
                </div>
            </div>


            <div className="nav-logo">
                <Link to="/">
                    <img
                        width={250}
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATcAAACiCAMAAAATIHpEAAAAe1BMVEX///8AAAAaGhoYGBgRERH7+/sNDQ3w8PCZmZkWFhZPT09kZGTb29skJCRcXFzp6elKSkrQ0NCRkZG8vLxycnLIyMgICAigoKCrq6uysrJBQUG/v7/FxcXj4+N7e3teXl4zMzOLi4tsbGw5OTkiIiJ4eHgrKyuDg4OdnZ0wHFk9AAAEyUlEQVR4nO3Z61KrMBQFYHYIoSkVWxV6sbVVj9X3f8KzQwuEmp0eZ3oYf6xvnFEgclmEXCBJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgN1rv90tvcVYWZR4pnpdFUcb2t+MCjafJQi71VvTK+1CJivfjLb4W+0lwT6t9UWSXKz+L4iV2kjcwIUPeBS54MZbbioyhbaTAjAs0aqKjWFDVpkO7UIlHqslbLImegnt64BO+3LLmdfPIOd7ChJT909+wBalobhutlHmLFJiRUtSolaUHodSdVTW1hNxS4y2WppZy4+MN709OqdLTyDnewsQdtz+lK7ntSBmr6NuD0ePc6LGqqu36jbjkOlzqztafi+pkG9zbT3KzerCLfa3GyY2vtF28khs/FR+lppVcwuV2brBmyloh4jtLy+CGzk9yU+Q/AWu3ZozcUn6g2qyu5JZaqlakI42Hl1tSkXdHBm6aW8rBPXcrcq7mdozc0oNSdXuYeG6Vu5iciwSbpIafW8I35DVY6pa5pQcOqq/XZa3MwY6Qmy65ZreXEc/trSbu36dabO8vcpvr+iNY6pa56XJFqm4HLXwtpljSGLnN3T06V6FobhlvXLhTs3fi/ga53Y1R3/j856ZtELgvTSmbjJRbXlt9aBajuZ0Dc/FVUhk/t0WsfYv0Lc5lbjqW271LqzntaZPgw0i5JVu+wqZmRHOb61OhQrr5ySC3+6NNxf7UHjYnh/BQ5Uf1LWmf1PPv0XJLXk6PYDS3e942c388k5THKbdqxrafpJX0NPK41+oToeL9LLdzPeMztHU+Zm7J0VqVxXPjou/NHxnnJgxovfkC8aBFmiVybt104Sa55e5omUvvORk1N1dP3uK5HS2d59ZPtXheLjfr8K+jFG7TYczOwof7YW6uH9VHcx4Bj5ibGwBzTY/k5m1a+J3mEOdm39nGqPpTPOo/9ae11xZczc2NCfjhP/3PmLklG8N9UiS3F572ldMTfszCr3Waetvs4DM2PL6e2zMNpsFTaSTY5eZm8+0Mf9TcuFE105mYW8bzF3VuyzU/hMIQrutPc7c76ajXc6uGVfoojQS73LiGdi8oRs3NNRFUaCk3Pi3dteXuVUf4tWQ/DplEhnnXc9vRcNKphP6jzy0pKO1XjpgbH1gZJeVWGj1tX/1Ui4Otw31ln1umrT0KR72eW2Kt2XcLy3YI9I2XW/6y6FeOmVvmekEhNzd4W/v/pihUzB/3rsRK8i+5vXgVzo0yhHbhIfR2ZuTcXKMi5bYcttM7aQrlz7N4VlCL79++kqwVLLJzA8Fls22bWvEO/IrcXCco5Hawxv9Okmy0CX6f8XN7bGdv3/C4t28sv8Jn9tWMoOdFqVxrKn0M+h25JQehX5jxFOHZX7GkVCjo9YPvOg2P8zi3lMfGaco/4hM7IW5ttdHu9Zr4DU3ITe7Kb+SBaOMt7vj+h+L44PWD5+meV4SGcDNe30VV8ULwivuPMsJuTvsqzyXew29VnFfe+m3lxUX9D5fti9DcfG+GpIZpsDpSKIs3byf5Yr1ab4WpiXyEK3sFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPif/gLs6ToV8hmqDQAAAABJRU5ErkJggg=="
                    />
                </Link>
            </div>


            {/* <div className="nav-menu-area">
                <ul className="menu">
                    {menuList.map((menu, index) => (
                        <li>
                            <a href="#" key={index}>
                                {menu}
                            </a>
                        </li>
                    ))}
                </ul>


            </div> */}
        </div>
    );
};

export default Navbar;