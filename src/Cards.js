// TODO: answer here
import React from "react";
import { Link } from "react-router-dom";
import {Box, Image, Heading,} from '@chakra-ui/react';

function Card({ card }) {
  return (
    <Link to={"/card/"+ card?.id}>
      <Box key={card.id} className="yugioh-card">
        <Image src={card.card_images[0].image_url} mx="auto" boxShadow={"xl"}/>
        <Heading as={"h2"} size='sm' textAlign={"center"}>{card.name}</Heading>
      </Box>
    </Link>
  )
}

export default Card;
