import { useDispatch } from 'react-redux';

import { FilterLabel } from './Filter.styled';
import { filterContact } from 'redux/slices/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const onFilter = e => {
    dispatch(filterContact(e.currentTarget.value));
  };

  return (
    <FilterLabel>
      Find contacts by name
      <input type="text" name="filter" onChange={onFilter} />
    </FilterLabel>
  );
};
