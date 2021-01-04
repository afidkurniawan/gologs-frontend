import React from "react";
import { Helmet } from "react-helmet-async";
import { Redirect } from "react-router-dom";
// import { useAuth } from "oidc-react";
import { useTranslation } from "react-i18next";

import { translations } from "../../../locales/i18n";
// import { Ellipsis } from "../../components/Spinners";
import { Sidebar } from "../../components/Sidebar/Loadable";
import { Header } from "../../components/Header/Loadable";

export default function HomePage(props) {
  // const auth = useAuth();
  const { t } = useTranslation();

  // async function handleLogoutClick(event) {
  //   if (auth === null) return;
  //   await auth.signOut();
  //   await auth.userManager?.signoutCallback();
  // }

  let content;
  // if (auth === null || auth.userData === null) {
  //   content = <Ellipsis />;
  // } else {
  if (props.location.search.length > 0) {
    content = <Redirect to={"/"} />;
  } else {
    content = (
      <>
        {/* <span>Welcome, {auth.userData!.profile.name}</span> */}
        {/* <span>Welcome, John Doe</span> */}
        <br />
        {/* <button type="button" onClick={handleLogoutClick}>
          {t(translations.account.logout)}
        </button> */}
      </>
    );
    // }
  }

  return (
    <>
      <Helmet>
        <title>{t(translations.home.title)}</title>
      </Helmet>
      <Sidebar />
      <Header title={t(translations.home.title)} />
      {content}
    </>
  );
}
