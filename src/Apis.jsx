import { useState } from "react";

const Apis = () => {
  const [ hero,setSuperHero ] = useState('');
  const [ superHeroData,setSuperHeroData ] = useState('');
  const handleSubmit = async () =>{
    const url = "https://www.superheroapi.com/api.php/1256666801897095/search/ironman";
  }  

  return (
    <div className="container">
      <p>API</p>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input type="text" placeholder="Enter search item" />
        </div>
        <div className="input-group">
          <input type="submit" value="SEARCH" />
        </div>
      </form>
    </div>
  );
};

export default Apis;
