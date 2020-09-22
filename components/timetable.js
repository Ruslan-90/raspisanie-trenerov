import styled from '@emotion/styled'
import Panel from './panel'
import Calendar from './calendar'

const Container = styled.div`
    margin: 30px 30px auto 240px;
    padding: 0;
`

const Timetable = () => (
    <Container>
        <Panel />
        <Calendar />
    </Container>
)

export default Timetable;