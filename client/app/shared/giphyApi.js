const giphyApi = ($http, $q, constants, giphyCache) => {

  const _cacheSize = constants.giphy_cache_size;

  const getCage = (limitTo = 25, offset = 0) => {
    if (!giphyCache.loaded()) {
      return $http.get(buildSearchUrl('nicolas+cage', _cacheSize))
        .then(({data: {data}}) => {
          giphyCache.load(data);
          return giphyCache.take(limitTo, offset);
        });
    }
    return $q.when(giphyCache.take(limitTo, offset));
  };

  const getById = id => giphyCache.find(['id', id]);

  const getRandomized = (limitTo = 10) =>
    getCage(_cacheSize).then(all => pickRandom(all, limitTo));

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

  return {getCage, getById, getRandomized};
};

giphyApi.$inject = ['$http', '$q', 'constants', 'giphyCache'];

export {giphyApi};
