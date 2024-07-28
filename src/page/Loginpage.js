import React, { useState } from 'react'
import { Form, Button, Container } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import './page.css';
import { useDispatch } from 'react-redux';
import { authenticateAction } from '../redux/actions/authenticateAction';

const Loginpage = ({ setAuthenticate }) => {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const loginUser = (event) => {
    event.preventDefault()
    // setAuthenticate(true)
    dispatch(authenticateAction.login(id, password))
    navigate('/')
  }
  return (
    <Container className='login-area'>
      <Form className='login-form' onSubmit={(event) => loginUser(event)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>이메일</Form.Label>
          <Form.Control type="email" onChange={(event) => setId(event.target.value)} />
          <Form.Text className="text-muted">

          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control type="password" onChange={(event) => setPassword(event.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="로그인 상태 유지" />
        </Form.Group>
        <Button variant="dark" type="submit">
          로그인
        </Button>
      </Form>
    </Container>
  )
}

export default Loginpage