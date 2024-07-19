import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router";
import { Link } from 'react-router-dom';

const Navbor = ({ authenticate, setAuthenticate }) => {

    const navigate = useNavigate()

    const search = (event) => {
        if (event.key === "Enter") {
            let keyword = event.target.value
            navigate(`/?q=${keyword}`)
        }
    }

    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성']
    return (
        <div>
            <div>
                {authenticate ? (
                    <div className='login-button' onClick={() => setAuthenticate(false)}>
                        <FontAwesomeIcon className='icon' icon={faUser} />
                        <div className='login'>로그아웃</div>
                    </div>) : (
                    <div className='login-button' onClick={() => navigate('/login')}>
                        <FontAwesomeIcon className='icon' icon={faUser} />
                        <div className='login'>로그인</div>
                    </div>
                )}
            </div>
            <div className='nav-section'>
                <Link to='/'>
                    <img width={100} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiMTobnkBhXqT2y97l05H0Yqq30INTslkMwA&s' />
                </Link>
            </div>
            <div className='menu-area'>
                <ul className='menu-list'>
                    {menuList.map((menu) => (<li>{menu}</li>))}
                </ul>
                <div className='search-container'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input type='text' onKeyDown={(event) => search(event)} className='search' placeholder='제품검색' />
                </div>
            </div>
        </div>
    )
}

export default Navbor