import {useEffect} from "react";
import {redirect} from "react-router-dom";
import {redirects, redirectsR} from "./App.constants";

export const useLocation = () => {

    useEffect(() => {
        if (!localStorage.getItem('location')) {
            localStorage.setItem('location', 'Москва');
        }

    }, []);

    useEffect(() => {
        return () => {
            if (localStorage.getItem('location')) {
                    window.location.href = redirects[localStorage.getItem('location')]
            }
        }

    }, []);
}