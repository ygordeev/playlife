import { FC, useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import TuneIcon from '@mui/icons-material/Tune';
import { LightDivider } from '@/plugins';

const SearchInputWrapper = styled('div')`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 300px;
  padding: 5px 15px;
  background-color: #1E1F25;
  border-radius: 21px;

  input {
    color: #e8e8e8;
  }
`

const SearchFilterIcon = styled(TuneIcon)`
  cursor: pointer;
`

const SearchInput: FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // To-do: Display the list of all the tasks matching the query
    console.log('Search query has changed to', searchQuery);
  }, [searchQuery]);

  return (
    <SearchInputWrapper>
      <ManageSearchIcon color="primary" />
      <InputBase
        value={searchQuery}
        placeholder="Active tasks"
        fullWidth
        onChange={e => setSearchQuery(e.target.value)}
      />
      <LightDivider
        orientation="vertical"
        variant="middle"
      />
      <SearchFilterIcon color="primary" />
    </SearchInputWrapper>
  )
}

export default SearchInput;
