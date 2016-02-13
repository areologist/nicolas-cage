const giphy = ($http, constants) => {

  const getCage = (imageKey = 'fixed_height', limitTo = 25, offset = 0) => {
    return $http.get(buildSearchUrl('nicolas+cage', limitTo, offset))
      .then(({data: {data}}) => data.map(item => item.images[imageKey]));
  };

  const getById = id => {
    console.log('getById: ', id);
  };

  const getFeatured = () => {
    return getCage()
      .then(all => pickRandom(all, 6));
  };

  // private functions

  const pickRandom = (array, length = 1, res = []) => {
    if (length === 0 || array.length < length) {
      return res;
    }
    const index = Math.floor(Math.random() * array.length);
    if (res.indexOf(array[index]) === -1) {
      res.push(array[index]);
      length -= 1;
    }
    return pickRandom(array, length, res);
  };

  const buildSearchUrl = (keyword, limit, offset) => {
    const {giphy_api_url, giphy_api_key} = constants;
    let result = `${giphy_api_url}?q=${keyword}&api_key=${giphy_api_key}`;
    if (limit) {
      result += `&limit=${limit}`;
    }
    if (offset) {
      result += `&offset=${offset}`;
    }
    return result;
  }

  // exposed functions

  return {getCage, getById, getFeatured};
};

giphy.$inject = ['$http', 'constants'];

export {giphy};
