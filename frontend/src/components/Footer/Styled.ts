import { motion } from "framer-motion";
import styled from "styled-components";

export const FooterContainer = styled(motion.footer)`
  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    gap: 1rem;
    display: flex;
    flex-wrap: wrap;

    li {
      list-style: none;
      
      a {
        color: #5b6f7e;
        transition: 150ms;

        &:hover {
          color: #FFEBE4;
        }
      }
    }
  }
`