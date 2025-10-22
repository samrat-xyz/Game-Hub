import React from "react";
import { useLoaderData } from "react-router";
import GamesCard from "../../components/GamesCard/GamesCard";

function Games() {
  const games = useLoaderData();

  return (
    <div className="my-12 w-11/12 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {games.map((game) => (
          <GamesCard game={game} key={game.id}></GamesCard>
        ))}
      </div>
    </div>
  );
}

export default Games;
