import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from "react-icons/bs";

interface SortSelectorProps {
  onSelectSortOrder: ( sortOrder: string ) => void,
  selectedSortOrder: string
}

const SortSelector = ( { onSelectSortOrder, selectedSortOrder }: SortSelectorProps ) => {
  const sortOrders = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average rating' },
  ]

  const currentOrder = sortOrders.find(order => order.value === selectedSortOrder);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
        Order by: {currentOrder?.label || 'Relevance'}</MenuButton>
      <MenuList>
        {sortOrders.map(order => <MenuItem
          onClick={() => onSelectSortOrder(order.value)}
          key={order.label}
          value={order.value}>{order.label}</MenuItem>)}
      </MenuList>
    </Menu>
  );
}

export default SortSelector;
