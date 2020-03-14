import React from "react";
import { Form, Input } from "@rocketseat/unform";
import { useSelector } from "react-redux";

import { Container } from "./styles";

export default function Profile() {
  const Profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {}

  return (
    <Container>
      <Form initialData={Profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" placeholder="Seu endereço de e-mail" type="email" />
        <hr />
        <Input
          name="oldpassword"
          type="password"
          placeholder="Sua senha atual"
        />
        <Input name="password" type="password" placeholder="Nova senha" />
        <Input
          name="confirmpassword"
          type="password"
          placeholder="confirmação de senha"
        />
        <button type="submit">Atualizar Perfil</button>
      </Form>
      <button type="button">Sair do Gobarber</button>
    </Container>
  );
}
