import Sidebar from './sidebar'
import Search from './Search'
import Profile from './Profile'
import Timetable from './timetable'


const Layout = () => (
    <div>
        <Sidebar />
        <Search />
        <Profile />
        <Timetable />
        <style jsx global>{`
            body {
                margin: 0;
                padding: 0;
                background-color: #EDF0F5;
                font-family: 'Jost', sans-serif;
                box-sizing: border-box;
            }
        `}</style>
    </div>
)

export default Layout;