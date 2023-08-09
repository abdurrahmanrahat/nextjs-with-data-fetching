const getAllBlogs = async () => {
  const res = await fetch("http://localhost:5000/datas");
  return res.json();
};

export default getAllBlogs;
