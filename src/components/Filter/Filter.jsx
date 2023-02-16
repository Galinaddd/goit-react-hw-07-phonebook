import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { setFilter } from '../../redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <>
      <p>find contacts by name</p>

      <input
        type="text"
        value={filter}
        onChange={evt => dispatch(setFilter(evt.currentTarget.value))}
      />
    </>
  );
};
