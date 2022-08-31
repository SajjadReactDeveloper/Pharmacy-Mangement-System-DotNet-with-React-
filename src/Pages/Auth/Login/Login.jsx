import * as React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./login.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const navigate = useNavigate();

  const submit = async () => {
    if (email == "admin@admin.com" && password == "admin") {
      localStorage.setItem("Login", "true");
      window.location.href = "/";
    }
  };
  return (
    <>
      <div class="auth-wrapper">
        <div class="auth-content container">
          <div class="card">
            <div class="row align-items-center">
              <div class="col-md-6">
                <div class="card-body">
                  <h4 className="text-center mb-4">Parmacy Project</h4>
                  <h4 class="mb-3 f-w-400">Login into your account</h4>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <EmailIcon />
                      </span>
                    </div>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email address"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <LockIcon />
                      </span>
                    </div>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div class="saprator">
                    <span>OR</span>
                  </div>
                  <button
                    style={{
                      background: "#3C5A99",
                      borderColor: "#3C5A99",
                      color: "#fff",
                    }}
                    class="btn btn-facebook mb-2 mr-2"
                  >
                    <FacebookIcon style={{ marginRight: 5 }} />
                    facebook
                  </button>
                  <button class="btn btn-googleplus mb-2 mr-2" style={{
                      background: "#C73E2E",
                      borderColor: "#C73E2E",
                      color: "#fff",
                    }}>
                    <GoogleIcon style={{ marginRight: 5 }} />
                    Google
                  </button>
                  <button
                    class="btn btn-twitter mb-2 mr-2"
                    style={{
                      background: "#42C0FB",
                      borderColor: "#42C0FB",
                      color: "#fff",
                    }}
                  >
                    <TwitterIcon style={{ marginRight: 5 }} />
                    Twitter
                  </button>
                  <div class="form-group text-left mt-2">
                    <div class="checkbox checkbox-fill d-inline">
                      <input
                        type="checkbox"
                        name="checkbox-fill-1"
                        id="checkbox-fill-a1"
                        checked=""
                      />
                      <label for="checkbox-fill-a1" class="cr">
                        {" "}
                        Save credentials
                      </label>
                    </div>
                  </div>
                  <button
                    class="btn btn-primary shadow-2 mb-4 mt-4"
                    onClick={submit}
                  >
                    Login
                  </button>
                </div>
              </div>
              <div class="col-md-6 d-none d-md-block">
                <img
                  src={require("../../../assets/images/b.jpg")}
                  alt=""
                  class="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
