export  const filterData = (searchInput, restraunts) => {
    return restraunts.filter((res) => {
        console.log(res,"res")
       return res?.data?.name?.toLowerCase().includes(searchInput.toLowerCase());
    });
  };