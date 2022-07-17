import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className='d-flex justify-content-center'>
            <Card className='p-4 shadow'>
                <main>
                    <h2>Who are we?</h2>
                    <p>
                        That feels like an existential question, don't you
                        think?
                    </p>
                </main>
                <nav>
                    <Link to="/" className='btn btn-success'>Home</Link>
                </nav>
            </Card>
        </div>
    )
}

export default About