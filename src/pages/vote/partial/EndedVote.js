import React, {Fragment, useEffect, useState} from "react";
import {MDBProgress} from "mdbreact";
import {useTranslation} from "react-i18next";

import "./EndedVote.scss";

export default ({data}) => {
  const {t} = useTranslation();

  const [total, setTotal] = useState(100);
  const [values, setValues] = useState({});

  const slash = t("DIRECTION") === "ltr" ? "/" : "\\";

  useEffect(e => {
    let temp = {};
    for (let item of data.answers) {
      temp = Object.assign({}, temp, {[item.answer]: item.count});
    }
    setTotal(data.answersCount);
    setValues(temp);
  }, [data, t]);

  return (
    <div className="text-left">
      <h4 className="text-primary font-weight-bold mb-3 p-0">{data.question}</h4>
      {data.answers.map((item, index) => (
        <Fragment key={index}>
          <p className="mb-1">{item.answer}</p>
          <MDBProgress className="mt-0 mb-3" material value={(values[item.answer] || 0) / total * 100} animated height="20px">{values[item.answer]} {slash} {total}</MDBProgress>
        </Fragment>
      ))}
    </div>
  );
}