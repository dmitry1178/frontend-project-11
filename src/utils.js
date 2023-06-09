const addProxy = (url) => {
  const urlWithProxy = new URL('/get', 'https://allorigins.hexlet.app');
  urlWithProxy.searchParams.set('url', url);
  urlWithProxy.searchParams.set('disableCache', 'true');
  return urlWithProxy.toString();
};

const getFeedId = (feeds, feedTitle) => {
  const idOfFeed = feeds.find((obj) => obj.title === feedTitle);
  return idOfFeed.id;
};

const changeLinkStyle = (postsDiv, visited) => {
  const links = postsDiv.querySelectorAll('li a');
  const linksArr = Array.from(links);
  const visitedLinks = linksArr.filter((link) => visited.includes(link.dataset.postid));
  return visitedLinks.forEach((visLink) => {
    visLink.classList.remove('fw-bold');
    visLink.classList.add('fw-normal');
    visLink.classList.add('visited');
  });
};

const addNews = (oldColl, newColl) => {
  const existingTitles = oldColl.map((obj) => obj.title);
  const newPosts = newColl.filter((obj) => !existingTitles.includes(obj.title));
  return [...oldColl, ...newPosts];
};

const updatePosts = (oldPosts, newPosts) => oldPosts.map((old, index) => {
  if (old[0].feedId === newPosts[index][0].feedId) {
    return addNews(old, newPosts[index]);
  }
  return old;
});

export {
  addProxy,
  getFeedId,
  changeLinkStyle,
  updatePosts,
};
