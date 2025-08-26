import { VStack } from "@chakra-ui/react";
import CardContainer from "./CardContainer";
import CardImageWrapper from "./CardImageWrapper";
import CardImage from "./CardImage";
import CardTitle from "./CardTitle";
import CardDesc from "./CardDesc";
import CardTools from "./CardTools";
import styles from "./Card.module.css";

const Card = ({ image, title, desc, tools }) => (
  <CardContainer>
    <CardImageWrapper>
      <CardImage image={image} />
    </CardImageWrapper>
    <VStack className={styles.card_wrapper}>
      <CardTitle title={title} />
      <CardDesc desc={desc} />
      <CardTools tools={tools} />
    </VStack>
  </CardContainer>
);

export default Card;
