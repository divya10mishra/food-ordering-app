export  const filterData = (searchInput, restraunts) => {
    return restraunts.filter((res) => {
  
       return res?.data?.name?.toLowerCase().includes(searchInput.toLowerCase());
    });
  };