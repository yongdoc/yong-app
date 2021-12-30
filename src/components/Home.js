import PageList from './PageList';
import useFetch from './useFetch';

const Home = () => {
  const { data: pages, isPending, error } = useFetch('http://localhost:8000/pages');

  return ( 
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {pages && <PageList  pages={pages} title="All Projects" />}
    </div>
   );
}
 
export default Home;