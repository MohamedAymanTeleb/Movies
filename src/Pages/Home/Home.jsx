import { useContext } from "react";
import { languageContext } from "../../Contexts/langContext";

function Home() {
    const { lang, setLang } = useContext(languageContext);

    const toggleLang = () => {
        setLang(lang === "en" ? "ar" : "en");
    };

    return (
        <div
            className="col-12 d-flex justify-content-center align-items-center bg-dark"
            style={{
                height: "100vh",
                // background: "linear-gradient(to bottom, #141e30, #243b55)",
                color: "#fff",
            }}
        >
            <div className="text-center">
                <h1
                    className="display-4"
                    style={{
                        fontWeight: "bold",
                        textShadow: "2px 2px 5px rgba(0,0,0,0.7)",
                    }}
                >
                    {lang === "en"
                        ? "Welcome To My Movies Site!"
                        : "مرحبا بك في موقعي"}
                </h1>
                <p className="lead mt-4" style={{ fontSize: "1.5rem" }}>
                    {lang === "en"
                        ? "Explore a wide selection of movies, right here!"
                        : "اكتشف مجموعة واسعة من الأفلام هنا!"}
                </p>
                <button
                    onClick={toggleLang}
                    className="btn btn-danger mt-4 px-4 py-2"
                    style={{ fontSize: "1.2rem", borderRadius: "25px" }}
                >
                    {lang === "en" ? "Switch to Arabic" : "التبديل إلى الإنجليزية"}
                </button>
            </div>
        </div>
    );
}

export default Home;
