import { useEffect } from "react"


export const HomePage = () => {


    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const token = params.get('token');
        if (token) {
          localStorage.setItem('access_token', token);
          window.history.replaceState({}, document.title, "/");
        }
    }, []);

    return (
        <div>
        </div>
    )

}