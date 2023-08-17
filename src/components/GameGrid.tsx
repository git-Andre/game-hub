import {useEffect, useState} from "react";
import apiClient from "../services/api-client.ts";

interface Game {
    id: number;
    name: string;
}

interface FetchGameResponse {
    count: number;
    results: Game[];
}

export const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        apiClient.get<FetchGameResponse>('/games')
            .then(res => setGames(res.data.results))
            .catch(err => setError(err.message));
    }, []);

    return (
        <>
            <ul>
                {games.map(game => <li key={game.id}>{game.name}</li>)}

            </ul>
            {error && <p>{error}</p>}
        </>
    );
};
