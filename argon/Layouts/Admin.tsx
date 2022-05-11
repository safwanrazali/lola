import Route from "next/link";
import { withRouter } from "next/router";
import React from "react";
import AdminFooter from "../Footers/AdminFooter";
// core components
import AdminNavbar from "../Navbars/AdminNavbar";
import Sidebar from "../Sidebar/Sidebar";
import routes from "./routes";

function Admin({ router, children }) {
  const [sidenavOpen, setSidenavOpen] = React.useState(true);
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.layout === "/admin") {
        return <Route href={prop.layout + prop.path} key={key} />;
      } else {
        return null;
      }
    });
  };

  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (router.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

  // toggles collapse between mini sidenav and normal
  const toggleSidenav = (e) => {
    if (document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.remove("g-sidenav-pinned");
      document.body.classList.add("g-sidenav-hidden");
    } else {
      document.body.classList.add("g-sidenav-pinned");
      document.body.classList.remove("g-sidenav-hidden");
    }
    setSidenavOpen(!sidenavOpen);
  };
  const getNavbarTheme = () => {
    return router.pathname.indexOf("admin/alternative-dashboard") === -1
      ? "dark"
      : "light";
  };
  return (
    <>
      <Sidebar
        routes={routes}
        toggleSidenav={toggleSidenav}
        sidenavOpen={sidenavOpen}
        logo={{
          innerLink: "/",
          imgSrc: "/assets/img/brand/nextjs_argon_black.png",
          imgAlt: "...",
        }}
      />
      <div className="main-content">
        <AdminNavbar
          theme={getNavbarTheme()}
          toggleSidenav={toggleSidenav}
          sidenavOpen={sidenavOpen}
          // brandText={getBrandText(router.pathname)}
        />
        {children}
        <AdminFooter />
      </div>
      {sidenavOpen ? (
        <div className="backdrop d-xl-none" onClick={toggleSidenav} />
      ) : null}
    </>
  );
}

export default withRouter(Admin);
