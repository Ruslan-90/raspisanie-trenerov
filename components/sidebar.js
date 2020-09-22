import styled from '@emotion/styled'
import calendar from './assets/calendar.svg'
import person from './assets/person.svg'
import book from './assets/book.svg'
import ruble from './assets/ruble.svg'
import ticket from './assets/ticket.svg'
import flag from './assets/flag.svg'
import mail from './assets/mail.svg'
import chart from './assets/chart.svg'
import settings from './assets/settings.svg'
import logo from './assets/logo.svg'
import hide from './assets/hide.svg'

const Nav = styled.nav`
  position: fixed;
  height: 100vh;
  width: 210px;
  left: 0px;
  top: 0px;
  background: #FFFFFF;
  margin: 0;
`
const Li = styled.li`
    list-style-type: none;
    display: block;
    margin-bottom: 13px;
    padding: 15px 0 15px 35px;

        :hover {
            border-left: 3px solid #2E71F3;
            background: #EDF0F5;
        }
`

const A = styled.a`
    margin-left: 12px;
    text-decoration: none;
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
`
const Logo = styled.div`
    padding: 30px 45px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`

const Hide = styled.div`
    position: absolute;
    top: 30px;
    right: 20px;
    cursor: pointer;
`

const Sidebar = () => (
    <div>
        <Nav>
            <Logo>
                <Hide><img src={hide} /></Hide>
                <img src={logo} />
            </Logo>
            <Li><img src={calendar} /><A href="#">Занятия</A></Li>
            <Li><img src={person} /><A href="#">Учащиеся</A></Li>
            <Li><img src={book} /><A href="#">Тренеры</A></Li>
            <Li><img src={ruble} /><A href="#">Финансы</A></Li>
            <Li><img src={ticket} /><A href="#">Абонементы</A></Li>
            <Li><img src={flag} /><A href="#">Доступ в CRM</A></Li>
            <Li><img src={mail} /><A href="#">Рассылки</A></Li>
            <Li><img src={chart} /><A href="#">Отчеты</A></Li>
            <Li><img src={settings} /><A href="#">Настройки</A></Li>
        </Nav>
    </div>
)

export default Sidebar;