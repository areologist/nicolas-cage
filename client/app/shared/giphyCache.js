const giphyCache = () => {

  let _loaded = false;
  let _cache = [];

  const loaded = () => _loaded;

  const take = (limitTo = 25, offset = 0) => {
    return _cache.slice(offset, offset + limitTo);
  };

  const load = data => {
    _cache = data.map(mapGiph).filter(g => g !== null);
    _loaded = true;
  };

  const find = ([key, value]) => {
    return _cache.find(item => item[key] === value);
  };

  // private functions

  const mapGiph = (giph) => {
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

  return {loaded, load, take, find};
};

export {giphyCache};
