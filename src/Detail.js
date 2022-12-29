import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {Heading, Box, Button, Text, SimpleGrid, HStack, Image} from '@chakra-ui/react';

function Detail() {
  const { id } = useParams();
  let [load, setLoading] = useState(true);
  let [data, setData] = useState({ card_images: [{ image_url: "" }] });

  useEffect(() => {
    fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?id=" + id)
      .then(result => result.json())
      .then(json => {
        setData(json.data[0])
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
        console.log(error);
      })
  }, []);

  if (load) return <h1>Loading...</h1>;
  return (
    <Box w={"90%"} mx="auto">
      <Button as={Link} to="/" replace>&#x21da; Kembali</Button>
      <HStack spacing={"24px"} alignItems="flex-start">
        <Image src={data.card_images[0].image_url} alt={data.name}/>
        <Box>
          <Heading as={"h2"}>{data.name}</Heading>
          <Text>Level: {data.level}</Text>
          <Text>{data.attribute}</Text>
          <Text>ATK/{data.atk} DEF/{data.def}</Text>
          <Text>[ {data.type} / {data.race} ]</Text>
          <Text>Description: {data.desc}</Text>
        </Box>
      </HStack>
      <Heading as={'h3'} textAlign="center" my={"1em"}>Card Set</Heading>
      <SimpleGrid columns={4} spacing="10px">
        {
          data.card_sets?.map((el, index) => (
            <Box key={index+1}>
              <Text>Name: {el.set_name}</Text>
              <Text>Code: {el.set_code}</Text>
              <Text>Rarity: {el.set_rarity}</Text>
              <Text>Price: {el.set_price}</Text>
            </Box>
          ))
        }
      </SimpleGrid>
    </Box>
  ) // TODO: replace this
}

export default Detail;
