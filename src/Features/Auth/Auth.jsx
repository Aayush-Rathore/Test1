import { Suspense, lazy } from "react";
import "./Auth.css";
import { XCircleFill } from "react-bootstrap-icons";
import { Route, Routes } from "react-router-dom";
const Login = lazy(() => import("./Components/Login-Signup/Login"));
const SideBox = lazy(() => import("./Components/SideBox/SideBox"));
const Signup = lazy(() => import("./Components/Login-Signup/Signup"));

const Auth = () => {
  return (
    <>
      <div
        className="modal fade auth__modal"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg modal__box">
          <div className="modal-content modal__content">
            <div className="modal-header modal__header">
              Let's learn, share & inspire each other with our passion for
              computer engineering. Sign up now 🤘🏼
            </div>
            <button
              className="close__btn"
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <XCircleFill size={28} color="white" />
            </button>
            <div className="modal-body modal__body">
              <Suspense fallback={<h3>Loading, Please wait...</h3>}>
                <Routes>
                  <Route
                    path="/"
                    element={
                      <>
                        <Login />
                        <SideBox
                          route="/Signup"
                          msg={"Don’t have an account yet?"}
                          link={"Create new for free!"}
                        />
                      </>
                    }
                  />
                  <Route
                    path="/Signup"
                    element={
                      <>
                        <Signup />
                        <SideBox
                          route="/"
                          msg={"Already have an account?"}
                          link={"Sign In"}
                          policy={
                            "By signing up, you agree to our Terms & conditions, Privacy policy"
                          }
                        />
                      </>
                    }
                  />
                </Routes>
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
