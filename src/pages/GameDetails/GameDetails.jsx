import React from 'react'
import { useLoaderData, useParams } from 'react-router'
import GameDetailsCard from '../../components/GameDetailsCard/GameDetailsCard';

function GameDetails() {
    const details = useLoaderData();
    const {id} = useParams()
    const filterdetails = details.filter(d => d.id == id);
    // console.log(filterdetails)
  return (
    <div>
      {
        filterdetails.map(detail => <GameDetailsCard detail={detail}></GameDetailsCard>)
      }
    </div>
  )
}

export default GameDetails
