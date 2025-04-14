import { useEffect } from "react"
import { useNavigate } from "react-router-dom";


export const HomePage = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const token = params.get('token');
        if (token) {
          localStorage.setItem('access_token', token);
          window.history.replaceState({}, document.title, "/");
        }
        if (!localStorage.getItem("access_token") && !token) {
            navigate("/welcome");   
        }
    }, []);

    return (
        <div>
            {localStorage.getItem("access_token")}
        </div>
    )

}