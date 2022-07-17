import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='d-flex justify-content-center'>
            <Card className='p-4 shadow'>
                <main>
                    <h2>Welcome to the homepage!</h2>
                    <p>You can do this, I believe in you.</p>
                </main>
                <nav>
                    <Link to="/about" className='btn btn-primary'>About</Link>
                </nav>
            </Card>
        </div>
    )
}

export default Home