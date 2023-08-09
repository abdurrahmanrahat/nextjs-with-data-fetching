const getSingleBlog = async (id) => {
  const res = await fetch(`http://localhost:5000/datas/${id}`);
  return res.json();
};

export default getSingleBlog;
