import { useQuery } from '@apollo/client';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import CategoryPicker from '../components/category-picker';
import JokePanel from '../components/joke-panel';
import { GET_JOKE } from '../queries/get-joke';

const Home: NextPage = () => {
  const [category, setCategory] = useState<string>('animal');

  const centerContent: string = 'flex justify-center items-center place-content-center';

  const { data, loading, error, refetch } = useQuery(GET_JOKE, {
    variables: { category },
  });

  useEffect(() => {
    if (category) {
      refetch();
    }
  }, [category, refetch]);

  return (
    <div className='w-full container mx-auto text-black'>
      <div className={`${centerContent} place-content-center mt-20`}>
        <CategoryPicker onSelect={setCategory}></CategoryPicker>
      </div>

      {!loading && (
        <>
          <div className={`${centerContent} place-content-center mt-4 text-2xl`}>
            {data && !loading && <JokePanel joke={data.joke.value}></JokePanel>}
          </div>

          <div className={`${centerContent} place-content-center mt-4`}>
            <button className='border p-2 text-xl border-orange-600' onClick={() => refetch()}>
              Next Joke
            </button>
          </div>
        </>
      )}

      {loading && <h1 className='text-center mt-4'>Loading...</h1>}
    </div>
  );
};

export default Home;
