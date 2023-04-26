import { ArrowRight } from "@phosphor-icons/react";
import { Button } from "../Button/Button";
import { Content, Form, InputBox, StartContainer } from "./Styled";

import Logo from "/assets/logo.webp";

export function Start() {
  return (
    <StartContainer>
      <Content
        initial={{ transform: 'translateX(-3rem)' }}
        animate={{ transform: 'translateX(0rem)' }}
        exit={{ transform: 'translateX(-3rem)' }}
        transition={{ duration: 0.5 }}
      >
        <img src={Logo} alt="Logo da Cafeteria" />
        <h1>O café do jeitinho que você quiser.</h1>
        <p>Oh Grão! Aqui você encontra cafés importados de vários lugares do mundo!</p>
      </Content>
      
      <Form
        initial={{ transform: 'translateX(3rem)' }}
        animate={{ transform: 'translateX(0rem)' }}
        exit={{ transform: 'translateX(3rem)' }}
        transition={{ duration: 0.5 }}
      >
        <h2>
          #1 - Nome e número da mesa
        </h2>

        <div>
          <InputBox>
            <label>Digite seu nome:</label>
            <input type="text" placeholder="Ex: Fulano da Silva" />
          </InputBox>

          <InputBox>
            <label>Nº da mesa</label>
            <input type="text" placeholder="Ex: 01" />
          </InputBox>
        </div>

        <Button text="Vamos começar">
          <ArrowRight size={16} weight="bold" />
        </Button>
      </Form>
    </StartContainer>
  )
};
