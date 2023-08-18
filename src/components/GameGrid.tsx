import useGames from "../hooks/useGames.ts";

export const GameGrid = () => {
  const {games, error}=  useGames();
    return (
        <>
            <ul>
                {games.map(game => <li key={game.id}>{game.name}</li>)}
            </ul>
            {error && <p>{error}</p>}
        </>
    );
};
