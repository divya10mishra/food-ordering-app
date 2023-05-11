import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import { registerSchema } from "../schemas";

const Register = ({ close }) => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmpassword: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values, action) => {
      alert(JSON.stringify(values, null, 2));
      action.resetForm();
    },
  });

  return ReactDOM.createPortal(
    <>
      <div className="modal-wrapper"></div>
      <div className="modal-container">
        <form onSubmit={formik.handleSubmit} className="login-style">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div className='popup-heder'>
              Registration
            </div>
            <div onClick={close} style={{cursor:'pointer'}}>❌</div>
          </div>

          <div>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              className="login-input"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email ? (
              <p>{formik.errors.email}</p>
            ) : (
              ""
            )}
          </div>

          <div>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="password"
              className="login-input"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password && formik.touched.password ? (
              <p>{formik.errors.password}</p>
            ) : (
              ""
            )}
          </div>

          <div>
            <input
              id="confirmpassword"
              name="confirmpassword"
              type="confirmpassword"
              placeholder="confirm password"
              className="login-input"
              onChange={formik.handleChange}
              value={formik.values.confirmpassword}
            />
            {formik.errors.confirmpassword && formik.touched.confirmpassword ? (
              <p>{formik.errors.confirmpassword}</p>
            ) : (
              ""
            )}
          </div>
          <div>
            <button type="submit" className="login-button">
              Register
            </button>
           
          </div>
        </form>
      </div>
    </>,
    document.querySelector(".myPortal")
  );
};

export default Register;
