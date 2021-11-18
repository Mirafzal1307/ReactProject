import React from 'react'
import Layout from '../../components/Layout';
// import Jumbotron from 'react-bootstrap'

function Home() {
    return (
        <>
            <Layout>
                <p className="jumbotron">
                    Welcome to Amin Dashboard
                </p>
             <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here.'</p>
            </Layout>
        </>
    )
}

export default Home
