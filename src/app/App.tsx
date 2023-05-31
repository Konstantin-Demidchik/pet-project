import { Suspense } from 'react';
import "./styles/index.scss";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AboutPage } from 'pages/about-page';
import { MainPage } from 'pages/main-page';
import { AppRouter } from './providers/router';

const App = () => {
    const { theme, toggleTheme } = useTheme();
    return <div className={classNames('app', {}, [theme])}>
        <button onClick={toggleTheme}>Toggle theme</button>
        <Link to="/">Главная</Link>
        <Link to="/about">О сайте</Link>
        <AppRouter />

    </div>
}

export default App;
