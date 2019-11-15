import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol, MDBDatePicker,
  MDBFormInline,
  MDBIcon,
  MDBInput, MDBInputGroup,
  MDBModalFooter,
  MDBRow,
  MDBSelect
} from "mdbreact";
import moment from "moment";
import {useDispatch, useSelector} from "react-redux";

import auth from "actions/auth";
import UserService from "services/UserService";
import {
  DATE_FORMAT_ISO,
  GENDER_MALE,
  PASSWORD_MIN_LENGTH,
  SUCCESS,
  UNKNOWN_SERVER_ERROR,
  USERNAME_MAX_LENGTH
} from "core/globals";
import routes from "core/routes";
import validators from "core/validators";
import {GENDER_FEMALE} from "core/globals";

// import "moment/locale/ar";

import "./SignUpPage.scss";

export default (props) => {
  const signedIn = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const {t} = useTranslation();

  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({});

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [sector, setSector] = useState("");
  const [company, setCompany] = useState("");
  // const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const [genderOptions, setGenderOptions] = useState([
    {text: t('COMMON.GENDER.MALE'), value: GENDER_MALE},
    {text: t('COMMON.GENDER.FEMALE'), value: GENDER_FEMALE},
  ]);

  useEffect(() => {
    setGenderOptions([
      {text: t('COMMON.GENDER.MALE'), value: GENDER_MALE},
      {text: t('COMMON.GENDER.FEMALE'), value: GENDER_FEMALE},
    ]);
  }, [props, t]);

  const handleSignIn = async event => {
    event.preventDefault();

    // try {
    //   const params = {email, password};
    //   dispatch(auth.request(params));
    //   let res = await UserService.signIn(params);
    //   if (res.result === SUCCESS) {
    //     dispatch(auth.success(res.data));
    //   } else {
    //     dispatch(auth.failure(res.message));
    //   }
    // } catch (err) {
    //   dispatch(auth.failure(UNKNOWN_SERVER_ERROR));
    // }
  };

  const temp = e => {
    console.log(e);
  };

  return (
    <MDBCard>
      <MDBCardBody className="mx-md-4 mx-sm-1">
        <form onSubmit={handleSignIn}>
          <div className="text-center">
            <h3 className="dark-grey-text mb-3 h1-responsive">
              <strong>{t("AUTH.SIGN_UP")}</strong>
            </h3>
          </div>
          <div className="grey-text">
            <MDBRow>
              <MDBCol md={6}>
                <MDBInput id="email" name="email" type="email" label={t("AUTH.EMAIL")} background containerClass="mb-0" value={email} getValue={setEmail} onBlur={() => setTouched(Object.assign({}, touched, {email: true}))}>
                  {touched.email && !validators.isEmail(email) && <div className="invalid-field">
                    {email.length === 0 ? t("COMMON.VALIDATION.REQUIRED", {field: t("AUTH.EMAIL")}) : !validators.isEmail(email) ? t("COMMON.VALIDATION.INVALID", {field: t("AUTH.EMAIL")}) : ""}
                  </div>}
                </MDBInput>
              </MDBCol>
              <MDBCol md={6}>
                <MDBInput id="username" name="username" type="text" label={t("AUTH.USERNAME")} background containerClass="mb-0" value={username} getValue={setUsername} onBlur={() => setTouched(Object.assign({}, touched, {username: true}))}>
                  {touched.username && !validators.isUsername(username) && <div className="invalid-field">
                    {username.length === 0 ? t("COMMON.VALIDATION.REQUIRED", {field: t("AUTH.USERNAME")}) : username.length > USERNAME_MAX_LENGTH ? t('COMMON.VALIDATION.MAX_LENGTH', {field: t('AUTH.USERNAME'), length: USERNAME_MAX_LENGTH}) : !validators.isUsername(username) ? t("COMMON.VALIDATION.INVALID", {field: t("AUTH.USERNAME")}) : ""}
                  </div>}
                </MDBInput>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md={6}>
                <MDBInput id="firstName" name="firstName" type="text" label={t("AUTH.FIRST_NAME")} background containerClass="mt-3 mb-0" value={firstName} getValue={setFirstName} onBlur={() => setTouched(Object.assign({}, touched, {firstName: true}))}>
                  {touched.firstName && firstName.length === 0 && <div className="invalid-field">
                    {t("COMMON.VALIDATION.REQUIRED", {field: t("AUTH.FIRST_NAME")})}
                  </div>}
                </MDBInput>
              </MDBCol>
              <MDBCol md={6}>
                <MDBInput id="lastName" name="lastName" type="text" label={t("AUTH.LAST_NAME")} background containerClass="mt-3 mb-0" value={lastName} getValue={setLastName} onBlur={() => setTouched(Object.assign({}, touched, {lastName: true}))}>
                  {touched.lastName && lastName.length === 0 && <div className="invalid-field">
                    {t("COMMON.VALIDATION.REQUIRED", {field: t("AUTH.LAST_NAME")})}
                  </div>}
                </MDBInput>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md={6}>
                <MDBSelect options={genderOptions} label={t('AUTH.GENDER')} className="mt-3 mb-0" selected={gender} getValue={val => setGender(val)} />
                {gender.length === 0 && <div className="invalid-field">
                  {t("COMMON.VALIDATION.REQUIRED", {field: t("AUTH.GENDER")})}
                </div> }
              </MDBCol>
              <MDBCol md={6}>
                <MDBDatePicker format={DATE_FORMAT_ISO} /*locale={moment.locale(t("CODE"))}*/ className="date-picker" value={birthday} getValue={val => setBirthday(val)} />
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md={6}>
                <MDBInput id="jobTitle" name="jobTitle" type="text" label={t("AUTH.JOB_TITLE")} background containerClass="mt-3 mb-0" value={jobTitle} getValue={setJobTitle} onBlur={() => setTouched(Object.assign({}, touched, {jobTitle: true}))}>
                  {touched.jobTitle && jobTitle.length === 0 && <div className="invalid-field">
                    {t("COMMON.VALIDATION.REQUIRED", {field: t("AUTH.JOB_TITLE")})}
                  </div>}
                </MDBInput>
              </MDBCol>
              <MDBCol md={6}>
                <MDBInput id="sector" name="sector" type="text" label={t("AUTH.SECTOR")} background containerClass="mt-3 mb-0" value={sector} getValue={setSector} onBlur={() => setTouched(Object.assign({}, touched, {sector: true}))}>
                  {touched.sector && sector.length === 0 && <div className="invalid-field">
                    {t("COMMON.VALIDATION.REQUIRED", {field: t("AUTH.SECTOR")})}
                  </div>}
                </MDBInput>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md={6}>
                <MDBInput id="company" name="company" type="text" label={t("AUTH.COMPANY")} background containerClass="mt-3 mb-0" value={company} getValue={setCompany} onBlur={() => setTouched(Object.assign({}, touched, {company: true}))}>
                  {touched.company && company.length === 0 && <div className="invalid-field">
                    {t("COMMON.VALIDATION.REQUIRED", {field: t("AUTH.COMPANY")})}
                  </div>}
                </MDBInput>
              </MDBCol>
              <MDBCol md={6}>
                <MDBInput id="city" name="city" type="text" label={t("AUTH.CITY")} background containerClass="mt-3 mb-0" value={city} getValue={setCity} onBlur={() => setTouched(Object.assign({}, touched, {city: true}))}>
                  {touched.city && city.length === 0 && <div className="invalid-field">
                    {t("COMMON.VALIDATION.REQUIRED", {field: t("AUTH.CITY")})}
                  </div>}
                </MDBInput>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              {/*<MDBCol md={6}>{t("AUTH.PHONE")}</MDBCol>*/}
              <MDBCol md={12}>
                <MDBInputGroup
                  material type="text"
                  prepend={<><span className="input-group-text md-addon">{t("AUTH.PHONE")}</span><span className="input-group-text md-addon">+123</span></>}
                  // inputs={
                  //   <MDBInput id="phone" name="phone" containerClass="mt-0 mb-0" value={phone} onChange={e => setPhone(e.target.value)} onBlur={() => setTouched(Object.assign({}, touched, {phone: true}))}/>}
                  containerClassName="mt-3 mb-4 ltr-force"
                  className="mt-0 mb-0" value={phone} getValue={setPhone} onBlur={() => setTouched(Object.assign({}, touched, {phone: true}))}>
                  {phone.length === 0 && <div className="invalid-field">
                    {t("COMMON.VALIDATION.REQUIRED", {field: t("AUTH.PHONE")})}
                  </div>}
                </MDBInputGroup>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md={6}>
                <MDBInput id="password" name="password" label={t("AUTH.PASSWORD")} type="password" background containerClass="mt-3 mb-0" value={password} getValue={setPassword} onBlur={() => setTouched(Object.assign({}, touched, {password: true}))}>
                  {touched.password && password.length < PASSWORD_MIN_LENGTH && <div
                    className="invalid-field">{password.length === 0 ? t("COMMON.VALIDATION.REQUIRED", {field: t("AUTH.PASSWORD")}) : t("COMMON.VALIDATION.MIN_LENGTH", {
                    field: t("AUTH.PASSWORD"),
                    length: PASSWORD_MIN_LENGTH
                  })}</div>}
                </MDBInput>
              </MDBCol>
              <MDBCol md={6}>
                <MDBInput id="password2" name="password2" label={t("AUTH.PASSWORD2")} type="password" background containerClass="mt-3 mb-0" value={password2} getValue={setPassword2} onBlur={() => setTouched(Object.assign({}, touched, {password2: true}))}>
                  {touched.password2 && (password2.length < PASSWORD_MIN_LENGTH || password2 !== password) && <div
                    className="invalid-field">{password2.length === 0 ? t("COMMON.VALIDATION.REQUIRED", {field: t("AUTH.PASSWORD2")}) : password2.length < PASSWORD_MIN_LENGTH ? t("COMMON.VALIDATION.MIN_LENGTH", {
                    field: t("AUTH.PASSWORD2"),
                    length: PASSWORD_MIN_LENGTH
                  }) : t("COMMON.VALIDATION.NOT_SAME", {field: t("AUTH.PASSWORD")})}</div>}
                </MDBInput>
              </MDBCol>
            </MDBRow>
          </div>
          <div className="text-center mt-4 mb-3 mx-5">
            <MDBBtn type="submit" color="indigo" rounded className="full-width z-depth-1a" disabled={loading || !validators.isEmail(email) || !username.length || username.length > USERNAME_MAX_LENGTH || !validators.isUsername(username) || !firstName.length || !lastName.length || !gender.length || !jobTitle.length || !sector.length || !company.length || !city.length || !phone.length || !password.length || password.length < PASSWORD_MIN_LENGTH || password2 !== password || password.length < PASSWORD_MIN_LENGTH }>
              <MDBIcon icon={"user-plus"} />{t("AUTH.SIGN_UP")}
            </MDBBtn>
          </div>
        </form>
      </MDBCardBody>
      <MDBModalFooter className="mx-5 pt-3 mb-1">
        <p className="font-small grey-text d-flex justify-content-end">
          {t("AUTH.ALREADY_REGISTERED")}
          <Link to={routes.auth.signIn} className="blue-text ml-1">{t("AUTH.SIGN_IN")}</Link>
        </p>
      </MDBModalFooter>
    </MDBCard>
  );
};
