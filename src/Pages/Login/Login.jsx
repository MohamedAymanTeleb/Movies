import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { languageContext } from "../../Contexts/langContext";



const Login = () => {
    const { lang, setLang } = useContext(languageContext);
    const nav = useNavigate();
    const NavigateTo = (path) => {
        nav(path);
    };

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({
        emailError: '',
        passwordError: ''
    })

    const handleChange = (evt) => {

        let emailRegex = /^[a-zA-Z]{4,10}@(gmail|yahoo)\.com$/
        // let passwordRegex = /^.{8,}$/
        let passwordRegex = /^[\S]{8,}$/; // No Spaces
        console.log(evt.target);
        if (evt.target.name == "email") {
            setUser({ ...user, email: evt.target.value })
            setErrors({ ...errors, emailError: (evt.target.value.length == 0) ? 'Email is required' : (emailRegex.test(evt.target.value)) ? '' : 'Email Regex' })
        } else if (evt.target.name == "password") {
            setUser({ ...user, password: evt.target.value })
            setErrors({ ...errors, passwordError: (evt.target.value.length == 0) ? 'Password is required' : passwordRegex.test(evt.target.value) ? '' : 'Password Regex' })
        }
    }

    const [passType, setPassType] = useState("password");

    const passChange = () => {
        setPassType(passType == "password" ? "text" : "password");
    }


    const handleSubmit = (evt) => {

        evt.preventDefault();

        if (user.email == "" || user.password == "") {
            alert("Please complete the form");
            return;
        }
        if (errors.emailError !== '' || errors.passwordError !== '') {
            alert("Please complete the form validation");
            return;
        }
        NavigateTo('/');

    }
    return (
        <>
            <div className="border rounded col-6 mx-auto my-5 d-flex justify-content-center" >
                <form className="col-6 m-4" onSubmit={(e) => { handleSubmit(e) }}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">{lang == "en" ? "Email Address" : "البريد الالكتروني"}</label>
                        <input type="text" name="email" onChange={(e) => { handleChange(e) }} value={user.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <p className="text-danger">{errors.emailError}</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label fw-bold">{lang == "en" ? "Password" : "كلمة المرور"}</label>
                        <input type={passType} name="password" onChange={(e) => { handleChange(e) }} value={user.password}
                            className="form-control" id="exampleInputPassword1" />
                        <p className="text-danger">{errors.passwordError}</p>
                        <button type="button" className="btn btn-secondary col-12" onClick={() => {
                            passChange();
                        }} >{lang == "en" ? "Show / Hide Password" : "اظهار / اخفاء كلمة المرور"}</button>

                    </div>

                    <button type="submit" className="btn btn-secondary col-12">{lang == "en" ? "Login" : "تسجيل الدخول"}</button>
                </form>
            </div>
        </>
    );

}
export default Login;