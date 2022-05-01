import react from 'react';
import { Route, Routes } from 'react-router';
import { Link,Outlet } from 'react-router-dom';


function Home() {
    return (
        <div>
            <h1>This is home</h1>
            <nav>
                <Link to="/" >home </Link>
                <Link to="about" > About </Link>
                <Link to="contact" >contact </Link>
            </nav>
        </div>
    )
}

function About() {
    return (
        <div>
            This is About
        </div>
    )
}

function Contact() {
    return (
        <div>
            This is Contact
            <Outlet />
        </div>
    )
}
function Dev1() {
    return (
        <div>
            This is Developer 1
        </div>
    )
}
function Dev2() {
    return (
        <div>
            This is Developer 2
        </div>
    )
}

function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='contact' element={<Contact />}>
                    <Route path='dev1' element={<Dev1 />} />
                    <Route path='dev2' element={<Dev2 />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App;