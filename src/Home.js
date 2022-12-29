// TODO: answer here
import React from "react";
import { useState, useEffect } from "react";
import {Heading, SimpleGrid, Select, Box} from '@chakra-ui/react';
import Card from "./Cards";

function Home() {
  const [data, setData ] = useState([]);
  const [load, setIsLoading] = useState(true);

  function sortData(type) {
    // setSorting(typeSort);
    const dataArray = [...data];

    if (type === "attack") {
      console.log(dataArray);
      const filterByAttack = dataArray.sort((a, b) => {
        return a.atk - b.atk;
      });

      setData(filterByAttack);
    }

    if (type === "name") {
      const filterByName = dataArray.sort((a, b) => a.name.localeCompare(b.name))

      setData(filterByName)

    }
    if (type === "defence") {
      const filterByAttack = dataArray.sort((a, b) => a.def - b.def)

      setData(filterByAttack);
    }
  }
  useEffect(() => {
    fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?banlist=tcg&level=4")
      .then(result => result.json())
      .then(json => {
        setIsLoading(false);
        setData(json.data);
      })
      .catch(error => {
        setIsLoading(false)
        console.log(error)
      })
  }, []);

  if (load) return <h1>Loading...</h1>;

  return (
    <Box mx={"auto"} w="100%">
      <Select name="sort" my={"17px"} w="100%" mx="auto" boxShadow={"xl"} onChange={(e)=> sortData(e.target.value)}>
        <option value={'attack'}>Attack</option>
        <option value={'name'}>Name</option>
        <option value={'defence'}>Defence</option>
      </Select>
      <SimpleGrid columns={4} spacing={10}>
        {
          data.map(card => (
            <Card card={card} key={card.id}/>
          ))
        }
      </SimpleGrid>
    </Box>
  )
}

export default Home;
