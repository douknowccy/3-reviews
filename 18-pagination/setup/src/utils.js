import Follower from "./Follower";

const paginate = (follower) => {
  const itemsPerpage = 12;
  const pages = Math.ceil(follower.length / itemsPerpage);
  const newFollowers = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerpage;
    return follower.slice(start, start + itemsPerpage);
  });
  return newFollowers;
};

export default paginate;
