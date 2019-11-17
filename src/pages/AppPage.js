import React from "react";
import {useTranslation} from "react-i18next";
import {BrowserRouter} from "react-router-dom";

import Router from "components/Router";
import apis from "core/apis";
import {setBaseUrl, setHeader} from "apis/fetch";
import i18n from "core/i18n";
import {useSelector} from "react-redux";

setBaseUrl(apis.baseUrl);
setHeader({lang: i18n.language});

export default () => {
  const {t} = useTranslation();
  const {auth} = useSelector(state => state);

  setHeader({Authorization: `Bearer ${auth.token}`});
  const direction = t("DIRECTION");

  return (
    <BrowserRouter>
      <div dir={direction} className={direction === "rtl" ? "rtl-content" : ""}>
        <Router/>
      </div>
    </BrowserRouter>
  );
};

