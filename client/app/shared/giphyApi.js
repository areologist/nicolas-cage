import 'babel-polyfill'; // for async/await

const giphyApi = ($http, $q, constants, giphyCache) => {
  const _cacheSize = constants.giphy_cache_size;
  let pickRandom;
  let buildSearchUrl;

  /**
   * Returns a list of Cage giphs based on optional `limitTo` and `offset`
   * properties of optional `options` object.
   */
  const getCage = ({ limitTo = 5, offset = 0 } = {}) => {
    if (!giphyCache.loaded()) {
      return $http.get(buildSearchUrl('nicolas+cage', _cacheSize))
        .then(({ data: { data } }) => {
          giphyCache.load(data);
          return giphyCache.take({ limitTo, offset });
        });
    }
    return $q.when(giphyCache.take({ limitTo, offset }));
  };

  /**
   * Finds and returns a single giph by id.
   */
  const getById = id => giphyCache.find(['id', id]);

  /**
   * Returns a randomized set of Cage giphs of max size limitTo.
   */
  const getRandomized = ({ limitTo = 5 } = {}) =>
    getCage({ limitTo: _cacheSize }).then(all => pickRandom(all, limitTo));

  /**
   * Experimental functions
   *
   * Included to demonstrate async/await function over traditional promise
   * pattern. (Won't work properly in ng 1.x due to digest cycle, though.)
   */

  async function getCageAsync({ limitTo = 5, offset = 0 } = {}) {
    if (!giphyCache.loaded()) {
      const url = buildSearchUrl('nicolas+cage', _cacheSize);
      const { data: { data } } = await $http.get(url);
      giphyCache.load(data);
    }
    return giphyCache.take({ limitTo, offset });
  }

  async function getRandom({ limitTo = 5 } = {}) {
    const all = await getCageAsync({ limitTo: _cacheSize });
    return pickRandom(all, limitTo);
  }

  // private functions

  pickRandom = (array, len = 1, res = []) => {
    if (len === 0 || array.length < len) {
      return res;
    }
    let length = len;
    const index = Math.floor(Math.random() * array.length);
    if (res.indexOf(array[index]) === -1) {
      res.push(array[index]);
      length -= 1;
    }
    return pickRandom(array, length, res);
  };

  buildSearchUrl = (keyword, limit, offset) => {
    const { giphy_api_url: apiUrl, giphy_api_key: apiKey } = constants;
    let result = `${apiUrl}?q=${keyword}&api_key=${apiKey}`;
    if (limit) {
      result += `&limit=${limit}`;
    }
    if (offset) {
      result += `&offset=${offset}`;
    }
    return result;
  };

  // member functions

  return { getCage, getById, getRandomized, getCageAsync, getRandom };
};

giphyApi.$inject = ['$http', '$q', 'constants', 'giphyCache'];

export { giphyApi };
