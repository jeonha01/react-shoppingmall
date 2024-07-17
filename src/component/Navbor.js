import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router";

const Navbor = () => {

    const navigate = useNavigate()

    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성']
    return (
        <div>
            <div>
                <div className='login-button' onClick={() => navigate('/login')}>
                    <FontAwesomeIcon className='icon' icon={faUser} />
                    <div className='login'>로그인</div>
                </div>
            </div>
            <div className='nav-section'>
                <img width={100} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiMTobnkBhXqT2y97l05H0Yqq30INTslkMwA&s' />
            </div>
            <div className='menu-area'>
                <ul className='menu-list'>
                    {menuList.map((menu) => (<li>{menu}</li>))}
                </ul>
                <div className='search-container'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input type='text' className='search' placeholder='제품검색' />
                </div>
            </div>
        </div>
    )
}

export default Navbor