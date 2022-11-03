import { useContext } from 'react';
import { Card } from 'react-bootstrap'
import { Layout } from '../components/layouts'
import { LangContext } from '../context/Lang';

const About = () => {
    const { dispatch: { translate } } = useContext(LangContext);
    return (
        <Layout title={translate('about')}>
            <div className='d-flex justify-content-center'>
                <Card className='p-4 shadow'>
                    <main>
                        <h2>Welcome to the About page!</h2>
                        <p>You can do this, I believe in you.</p>
                    </main>
                </Card>
            </div>
        </Layout>
    )
}

export default About