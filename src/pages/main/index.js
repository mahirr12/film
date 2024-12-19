import React from 'react';
import { Movies } from '../../Components/movies';
import { Header } from '../../Components/navbar';
import './style.css';

const MainPage = () => {

    return (
        <div className="main-page">
            <Header />
            <main className="main-page__content">
                <section className="main-page__main-section">
                    <div className="main-page__movies">
                        <Movies />
                    </div>
                </section>
            </main>
        </div>
    )
}

export default MainPage;