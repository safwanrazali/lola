import { withRouter } from "next/router";
import React from "react";
import AuthFooter from "../Footers/AuthFooter";
// core components
import AuthNavbar from "../Navbars/AuthNavbar";

function Auth({ children }: React.PropsWithChildren<{}>) {
  React.useEffect(() => {
    document.body.classList.add("bg-default");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.remove("bg-default");
    };
  });

  return (
    <>
      <div className="main-content">
        <AuthNavbar />
        {children}
      </div>
      <AuthFooter />
    </>
  );
}

export default withRouter(Auth);
