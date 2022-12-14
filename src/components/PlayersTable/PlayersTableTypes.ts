export interface PlayersTableProps {
  players: Player[];
  handleAddFavorites: (id: number) => void;
}

export interface Player {
  first_name: string;
  height_feet?: number;
  height_inches?: number;
  id: number;
  last_name: string;
  position: string;
  weight_pounds?: number;
  team: string;
}

