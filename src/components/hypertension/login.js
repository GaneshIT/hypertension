import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from "../../AuthContext";
export default function Login(){
    const { login } = useAuth();
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        login({
          email: data.get("email"),
          password: data.get("password")
        });
      };

    return(
        <div>
            <h2>HYPERTENSION REGISTRY OF INDIA</h2>
            <h2>Welcome back!</h2>
            <h3>Don't have an account?<span><Link to={"/register"}>Sign Up</Link></span></h3>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <input id="email" type="text" value="" autoComplete="email" className="form-control" placeholder="Enter your email id" />
        </div>
        <div className="form-group">
            <input id="password" type="text" value="" autoComplete="password" className="form-control" placeholder="Enter your password" />
        </div>
        <input type="submit" value="Login" className="btn btn-success" />
        <div>Forgot your password? <span><Link to={"/register"}>Reset it</Link></span></div>
        </form>
        </div>
    );
}