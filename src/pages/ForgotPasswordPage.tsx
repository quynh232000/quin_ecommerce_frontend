import { Link, useLocation, useNavigate } from "react-router-dom";
import i_forgot from "../assets/images/forgot_pasword.png";
import { ChangeEvent, useState } from "react";
import { FormLogin } from "../interfaces/formData";
import { SLogin } from "../services/AppService";
import { GoogleCredentialResponse } from "../interfaces/app";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import GoogleLoginButton from "../components/compoment/GoogleLoginButton";
import { sLoginWithGoogle } from "../services/AppService";
import { useTranslation } from "react-i18next";
import { setIsLogin } from "../redux/reducers/authReducer";
import { setCurrentUser } from "../redux/reducers/appReducer";
import i_logo from "../assets/logo/logo-new.png";
import { FaArrowLeftLong } from "react-icons/fa6";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
function ForgotPasswordPage() {
  const { t } = useTranslation();
  const location = useLocation();
  const { cart } = useSelector((state: RootState) => state.appReducer);
  const dispatch = useDispatch();
  const searchParams = new URLSearchParams(location.search);
  const redirect = searchParams.get("redirect") || "";

  const [formData, setFormData] = useState<FormLogin>(new FormLogin());
  const [errorInput, setErrorInput] = useState<FormLogin>(new FormLogin());

  const [isSubmit, setIsSubmit] = useState(false);

  const [resultSuccess, setResultSuccess] = useState<string>();
  const [resultError, setResultError] = useState<string>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsSubmit(false);
    const { name, value } = e.target;
    let isValid = true;
    if (value == "") {
      setErrorInput({
        ...errorInput,
        [name]: t("login.t1"),
      });
      isValid = false;
    } else {
      setErrorInput({
        ...errorInput,
        [name]: "",
      });
    }
    if (name == "email" && value != "") {
      if (!emailRegex.test(value)) {
        setErrorInput({
          ...errorInput,
          email: t("login.t2"),
        });
        isValid = false;
      }
    }

    setFormData({
      ...formData,
      [name]: value,
    });

    if (
      formData.email != "" &&
      formData.password != "" &&
      emailRegex.test(formData.email) &&
      isValid
    ) {
      setIsSubmit(true);
    }
  };

  const handleSubmit = () => {
    setResultError("");
    setResultSuccess("");
    SLogin(formData).then((res) => {
      handleLoginSuccess(res);
    });
  };
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleLoginSuccess = (res: any) => {
    if (res.status) {
      localStorage.setItem("ACCESS_TOKEN", res.data.meta.access_token);
      localStorage.setItem("IS_LOGIN", JSON.stringify(true));
      localStorage.setItem("CURRENT_USER", JSON.stringify(res.data.user));
      dispatch(setIsLogin(true));
      dispatch(setCurrentUser(res.data.user));

      // asyn cart
      if (cart) {
        const listIds: number[] = [];
        cart.forEach((i) => {
          listIds.push(i.id);
        });
        // SAsynCart(listIds, res.data.meta.access_token).then((res) => {
        //   dispatch(asyncCart(res.data ?? []));
        //   setResultSuccess(t('login.3'));
        //   // window.location.href = redirect ? redirect : "/";
        // });
        navigate("/");
      } else {
        // window.location.href = redirect ? redirect : "/";
      }
    } else {
      setResultError(res.message);
    }
  };
  // login with google
  const handleLoginWithGoogle = (response: GoogleCredentialResponse) => {
    if (response.credential) {
      const token = response.credential;
      sLoginWithGoogle(token).then((res) => {
        handleLoginSuccess(res);
      });
    }
  };

  return (
    <div className="w-full px-5 xl:px-0 xl:w-content m-auto my-[32px]">
      {/* <ToastMessage type="success" title="Thành công!" message="okoko" /> */}
      <div className="border rounded-lg flex gap-5 shadow-sm px-5 py-12">
        <div className="flex-1 px-12 rounded-lg hidden lg:block relative">
          <Link to={"/login"} className=" absolute top-0" title="Back">
            <div className="hover:bg-primary-50 px-4 py-2 rounded-lg">
              <FaArrowLeftLong className="text-primary-500" />
            </div>
          </Link>
          <div className="p-12">
            <img
              src={i_forgot}
              className="w-full rounded-lg h-full object-cover"
              alt=""
            />
          </div>
        </div>
        <div className="w-full lg:w-40 p-3">
          <div>
            <div className="flex justify-between items-center">
              <div className="font-bold text-2xl text-primary-500">
                Quên mật khẩu
              </div>
              <Link to={"/"}>
                <img src={i_logo} className="w-[74px]" alt="" />
              </Link>
            </div>
            <div className="text-sm text-gray-500 mt-1">
              Vui lòng nhập Email của bạn{" "}
            </div>
          </div>
          <div className="py-4 flex flex-col gap-3 mt-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-sm font-bold">
                Email
              </label>
              <input
                className={
                  "border p-2 px-4 rounded-lg shadow-sm focus:border-primary-500" +
                  (errorInput.email && " border-deep-orange-500")
                }
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@example.com"
              />
              <small className="text-red-500">{errorInput.email}</small>
            </div>

            <div>
              {resultSuccess && (
                <div className="bg-success-50 border border-success-500 px-3 py-2 rounded-lg text-success-500">
                  {resultSuccess}
                </div>
              )}
              {resultError && (
                <div className="bg-deep-orange-50 border border-deep-orange-500 px-3 py-2 rounded-lg text-deep-orange-500">
                  {resultError}
                </div>
              )}
            </div>
          </div>
          <div className="py-3">
            {isSubmit ? (
              <button
                onClick={handleSubmit}
                className="w-full bg-primary-500 text-white py-2 rounded-lg hover:bg-primary-600"
              >
                Xác nhận
              </button>
            ) : (
              <button className="w-full bg-primary-200 text-white py-2 rounded-lg cursor-not-allowed">
                Xác nhận
              </button>
            )}

            <div className="flex justify-center mt-5">
              <Link
                to={"/register" + (redirect ? "?redirect=" + redirect : "")}
              >
                {t("login.t8")}?{" "}
                <span className="text-primary-500 underline ml-1 hover:text-primary-600">
                  {t("login.t9")}
                </span>
                .
              </Link>
            </div>
          </div>

          <div className="border-b relative my-4">
            <div className=" absolute text-sm top-[-10px] bg-white px-3 right-[50%] translate-x-[50%] text-gray-500">
              {t("login.t10")}
            </div>
          </div>
          <div className="pt-4 flex justify-center">
            <GoogleLoginButton handleLoginWithGoogle={handleLoginWithGoogle} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
