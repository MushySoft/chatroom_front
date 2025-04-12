import { Routes, Route } from "react-router-dom";
import { WelcomePage } from "./welcome";
import { HomePage } from "./home";
import { Page404 } from "./notFound/notFound";
import { Layout } from "../shared/layouts";

export const Pages = () => (
    <Layout>
        <Routes>
            <Route path="/welcome" element={<WelcomePage/>}/>
            <Route path="/" element={<HomePage/>}/>
            <Route path="*" element={<Page404/>}/>
        </Routes>
    </Layout>
)