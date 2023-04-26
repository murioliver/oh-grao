import { FooterContainer } from "./Styled";

export function Footer() {
  const fullYear = new Date().getFullYear()

  return (
    <FooterContainer>
      <span>@{fullYear} - Feito por eles:</span>

      <ul>
        <li>
          <a
            href="https://github.com/dsouloficial"
            target="_blank"
          >
            Denilson Bernardo
          </a>
        </li>
        <li>
          <a
            href="https://github.com/murioliver"
            target="_blank"
          >
            Muriel Oliveira
          </a>
        </li>
        <li>
          <a
            href="https://github.com/tonalmeidadev"
            target="_blank"
          >
            Wellington Almeida
          </a>
        </li>
      </ul>
    </FooterContainer>
  )
}