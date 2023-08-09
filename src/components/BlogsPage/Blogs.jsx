import getAllBlogs from "@/Utilities/getAllBlogs";
import SingleBlog from "./SingleBlog";

const Blogs = async () => {
  const blogs = await getAllBlogs();
  console.log(blogs, "blogs");
  return (
    <div>
      {blogs.map((blog) => (
        <SingleBlog key={blog.id} blog={blog}></SingleBlog>
      ))}
    </div>
  );
};

export default Blogs;
