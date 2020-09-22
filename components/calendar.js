import styled from '@emotion/styled'
import leftarrow from './assets/leftarrow.svg'
import rightarrow from './assets/rightarrow.svg'
import circle1 from './assets/circle1.svg'
import circle2 from './assets/circle2.svg'
import circle3 from './assets/circle3.svg'
import circle4 from './assets/circle4.svg'
import circle5 from './assets/circle5.svg'
import alarm from './assets/alarm.svg'

const Container = styled.div`
    background: #FFFFFF;
    border-radius: 4px;
    position: relative;
`

const Diapazon = styled.h3`
    font-family: Jost;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    color: #000000;
    text-align: center;
    padding: 20px 0;
    margin: 0;
`
const Day = styled.div`
    position: absolute;
    width: 100px;
    height: 16px;
    top: 25px;
    right: 20px;
    display: flex;
    align-content: center;
`

const Arrow = styled.button`
    background: #FFFFFF;
    border: none;
    cursor: pointer;

    :focus {
        outline: none;
    }
`

const Date = styled.span`
    font-weight: 500;
    font-size: 11px;
    line-height: 16px;
    text-transform: uppercase;
    color: #979797;

    :hover {
        text-decoration-line: underline;
    }
`
const Teachers = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 20px;

    
`

const Teacher = styled.span`
    font-size: 11px;
    line-height: 16px;
    color: #000000;
    margin-left: 15px;

    img {
        margin-right: 5px;
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 68px repeat(6, 1fr);
    grid-template-rows: 56px repeat(19, 23px);
    grid-gap: 0;
    padding: 0 20px;
`
const Days = styled.div`
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    
`

const ItemDate = styled.p`
    font-family: Jost;
    font-weight: 500;
    text-align: center;
    color: #000000;
    font-size: 12px;
    margin: 0;
    padding-top: 15px;
`

const ItemDay = styled.p`
    font-family: Jost;
    font-weight: 400;
    text-align: center;
    color: rgba(0, 0, 0, 0.5);
    font-size: 12px;
    margin: 0;
    padding-bottom: 15px;
`
const FirstTime = styled.div`
    font-family: Jost;
    font-weight: 400;
    text-align: center;
    color: rgba(0, 0, 0, 0.5);
    font-size: 12px;
    margin: 0;
    padding-bottom: 15px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    position: relative;

    img {
        padding-top: 17px;
    }

    p {
        margin-bottom: 0;
        position: absolute;
        bottom: 0;
        right: 16px;
    }
`

const Time = styled.div`
font-family: Jost;
font-weight: 400;
color: rgba(0, 0, 0, 0.5);
font-size: 12px;
margin: 0;

    p {
        margin: 0;
        text-align: center;
    }
`

const Cell = styled.div`
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    border-top: 1px solid rgba(0, 0, 0, 0.1);
`


const Calendar = () => (
    <Container>
        <Diapazon>27 июля – 2 августа 2020 г.</Diapazon>
        <Day>
            <Arrow><img src={leftarrow}/></Arrow>
            <Date>Сегодня</Date>
            <Arrow><img src={rightarrow}/></Arrow>
        </Day>
        <Teachers>
            <Teacher><img src={circle1} />Высоцкая Элеонора</Teacher>
            <Teacher><img src={circle2} />Гайсина Гузель</Teacher>
            <Teacher><img src={circle3} />Гиголо Анна</Teacher>
            <Teacher><img src={circle4} />Горбукова Юлия</Teacher>
            <Teacher><img src={circle5} />Марков Руслан</Teacher>
         </Teachers>
         <Grid>
            <FirstTime>
                <img src={alarm} />
                <p>08:00</p>
            </FirstTime>
            <Days>
                <ItemDate>27.07,</ItemDate>
                <ItemDay>Понедельник</ItemDay>
            </Days>
            <Days>
                <ItemDate>28.07,</ItemDate>
                <ItemDay>Вторник</ItemDay>
            </Days>
            <Days>
                <ItemDate>29.07,</ItemDate>
                <ItemDay>Среда</ItemDay>
            </Days>
            <Days>
                <ItemDate>30.07,</ItemDate>
                <ItemDay>Четверг</ItemDay>
            </Days>
            <Days>
                <ItemDate>31.07,</ItemDate>
                <ItemDay>Пятница</ItemDay>
            </Days>
            <Days>
                <ItemDate>01.08,</ItemDate>
                <ItemDay>Суббота</ItemDay>
            </Days>
            <Time>
            </Time>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Time>
            <p>08:30</p>
            </Time>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Time>
            </Time>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Time>
            <p>09:00</p>
            </Time>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Time>
            </Time>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Time>
            <p>09:30</p>
            </Time>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Time>
            </Time>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Time>
            <p>10:00</p>
            </Time>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Time>
            </Time>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Time>
            <p>10:30</p>
            </Time>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Time>
            </Time>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Time>
            <p>11:00</p>
            </Time>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Time>
            </Time>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Time>
            <p>11:30</p>
            </Time>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Time>
            </Time>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Time>
            <p>12:00</p>
            </Time>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Time>
            </Time>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Time>
            <p>12:30</p>
            </Time>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Time>
            </Time>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Time>
            <p>13:00</p>
            </Time>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Time>
            </Time>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            
             </Grid>
    </Container>
)

export default Calendar;