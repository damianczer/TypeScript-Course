import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const Layout = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900
         dark:text-gray-100 transition-colors duration-300">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};
