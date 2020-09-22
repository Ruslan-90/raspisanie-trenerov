import styled from '@emotion/styled'
import filter from './assets/filter.svg'
import list from './assets/list.svg'
import buttoncalendar from './assets/buttoncalendar.svg'
import buttonbook from './assets/buttonbook.svg'

const Container = styled.div`
    width: 100%;
    height: 43px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
`

const LeftButtons = styled.div`
    width: 147px;
    display: flex;
    justify-content: space-between;
`

const RightButtons = styled.div`
    width: 380px;
    display: flex;
    justify-content: space-between;
`
const WeekButton = styled.button`
    font-family: Jost;
    width: 76px;
    height: 43px;
    background: #FFFFFF;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    font-weight: 500;
    font-size: 13px;
    color: #000000;

    :focus {
        outline: none;
    }
`

const DayButton = styled.button`
    font-family: Jost;
    width: 61px;
    height: 43px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    font-weight: 400;
    font-size: 13px;
    background-color: #EDF0F5;
    cursor: pointer;

    :focus {
        outline: none;
    }
`

const AddButton = styled.button`
    font-family: Jost;
    width: 123px;
    height: 43px;
    background: #52AD5B;
    border-radius: 30px;
    cursor: pointer;
    font-weight: 500;
    font-size: 13px;
    color: #FFFFFF;
    border: none;

    :focus {
        outline: none;
    }
`
const FilterButton = styled.button`
    width: 111px;
    height: 43px;
    background: #FFFFFF;
    border-radius: 30px;
    border: none;
    font-family: Jost;
    font-weight: 500;
    font-size: 13px;
    color: #000000;

    :focus {
        outline: none;
    }

    img {
        margin-right: 7px;
    }
`
const PageType = styled.div`
    width: 126px;
    height: 43px;
    background: #FFFFFF;
    border-radius: 33px;
`

const Type = styled.button`
    width: 42px;
    height: 43px;
    border-radius: 33px;
    border: none;
    background: #FFFFFF;
    cursor: pointer;

    :focus {
        outline: none;
    }
`

const ActivType = styled.button`
    width: 42px;
    height: 43px;
    border-radius: 33px;
    background: #2E71F3;
    box-shadow: 0px 0px 20px rgba(33, 45, 65, 0.1);
    border: none;
    cursor: pointer;

    :focus {
        outline: none;
    }
`
const Panel = () => (
    <Container>
        <LeftButtons>
            <WeekButton>Неделя</WeekButton>
            <DayButton>День</DayButton>
        </LeftButtons>
        <RightButtons>
            <AddButton>+ Добавить</AddButton>
            <FilterButton><img src={filter} />Фильтр</FilterButton>
            <PageType>
                <Type><img src={list} /></Type>
                <Type><img src={buttoncalendar} /></Type>
                <ActivType><img src={buttonbook} /></ActivType>
            </PageType>
        </RightButtons>
    </Container>
)

export default Panel;