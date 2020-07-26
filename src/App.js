import React, {useState} from 'react';
import useFetchJobs from './useFetchJobs';
import {Container} from 'react-bootstrap';
import Job from './component/Job';
import JobsPagination from './component/JobsPagination';
import SearchForm from './component/SearchForm';

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const {jobs, loading, error, hasNextPage} = useFetchJobs(params,page);

  function handleParamChange(e) {
    const param = e.target.name
    const value = e.target.value
    setPage(1)
    setParams(prevParams => {
      return { ...prevParams, [param]: value }
    })
  }


  return (
   <Container className="my-4">
     <h1 className="mb-4">GitHub Jobs</h1>
     <SearchForm params={params} onParamChange={handleParamChange} />
     <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage}/>
     {loading && <h1>Loading...</h1>}
     {error && <h1>Errors...Try Reloading!!!</h1>}
     <h1>{jobs.map(job => {
       return (
         <Job key={job.id} job={job}></Job>
       )
     })}</h1>
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage}/>
   </Container>
  );
}

export default App;