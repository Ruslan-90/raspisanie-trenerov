import styled from '@emotion/styled'
import notification from './assets/notification.svg'
import avatar from './assets/avatar.svg'

const Container = styled.div`
    position: absolute;
    top: 30px;
    right: 30px;
    display: flex;
    cursor: pointer;
    
    p {
        padding: 0 10px 0 15px;
        border-left: 1px solid rgba(0, 0, 0, 0.1);
    }

    img:first-of-type {
        padding-right: 15px;
    }
`

const Profile = () => (
    <div>
        <Container>
            <img src={notification} />
            <p>Alexander Gerasimuk</p>
            <img src={avatar} />
        </Container>
    </div>
)




export default Profile;