import React from "react";
import { Link } from "react-router-dom";

import logo from "~/assets/logo1.svg";
import { Container, Content, Profile } from "./styles";

import Notifications from "~/components/Notifications";

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Gobarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>Francinildo Rodrigues</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Francinildo Rodrigues"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
