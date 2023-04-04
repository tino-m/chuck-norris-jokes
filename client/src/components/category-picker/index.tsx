import { useQuery } from '@apollo/client';
import { ChangeEvent, FC } from 'react';
import { GET_CATEGORIES } from '../../queries/get-categories';

interface CategoryPickerProps {
  onSelect: (category: string) => void;
}

const CategoryPicker: FC<CategoryPickerProps> = ({ onSelect }) => {
  const { data, loading, error } = useQuery(GET_CATEGORIES, {});

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onSelect(e.target.value);
  };

  return (
    <>
      {!loading && (
        <>
          <label htmlFor='categories' className='text-2xl mr-2'>
            Category:
          </label>
          <select
            name='categories'
            id='categories'
            onChange={onChange}
            className='text-2xl border border-orange-600'
            defaultValue={'animal'}>
            {data?.categories.items.map((c: string) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </>
      )}
    </>
  );
};

export default CategoryPicker;
