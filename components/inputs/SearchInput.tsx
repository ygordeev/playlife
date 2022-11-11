import { useState, useEffect } from 'react';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // To-do: Display the list of all the tasks matching the query
    console.log('Search query has changed to', searchQuery);
  }, [searchQuery]);

  return (
    <Stack
      direction="row"
      alignItems="center"
      bgcolor="grey.dark"
      borderRadius={2.5}
      gap={1.25}
      px={1}
    >
      <IconButton>
        <SearchIcon color="primary" />
      </IconButton>

      <InputBase
        value={searchQuery}
        placeholder="Active tasks"
        sx={{ color: 'common.white' }}
        fullWidth
        onChange={e => setSearchQuery(e.target.value)}
      />
    </Stack>
  )
}

export default SearchInput;
