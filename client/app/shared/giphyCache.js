const giphyCache = () => {
  let _loaded = false;
  let _cache = [];
  let mapGiph;

  /**
   * Returns true if cache has been initialized and is ready.
   */
  const loaded = () => _loaded;

  /**
   * Returns array of items from cache based on limitTo and offset (start).
   */
  const take = (limitTo = 25, offset = 0) =>
    _cache.slice(offset, offset + limitTo);

  /**
   * Populates cache from data arg and inits.
   */
  const load = data => {
    _cache = data.map(mapGiph).filter(g => g !== null);
    _loaded = true;
  };

  /**
   * Returns item(s) from cache where specified key value equals
   * specified value.
   */
  const find = ([key, value]) => _cache.find(item => item[key] === value);

  // private functions

  mapGiph = (giph) => {
    if (giph.type !== 'gif' || giph.rating === 'r') {
      return null;
    }
    const fixedh = giph.images.fixed_height;
    const orig = giph.images.original;
    return {
      id: giph.id,
      fixedHeight: {
        url: fixedh.url,
        width: fixedh.width,
        height: fixedh.height
      },
      original: {
        url: orig.url,
        width: orig.width,
        height: orig.height
      }
    };
  };

  return { loaded, load, take, find };
};

export { giphyCache };
