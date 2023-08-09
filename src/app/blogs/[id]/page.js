import getSingleBlog from "@/Utilities/getSingleBlog";

const SingleBlogPage = async ({ params }) => {
  // console.log(params.id);
  const blog = await getSingleBlog(params.id);

  return (
    <div>
      <h2 className="text-4xl uppercase font-bold text-center my-6">
        Specific Single Blog
      </h2>
      <div className="m-4 border border-blue-800 p-4">
        <h2 className="text-2xl font-semibold">{blog.blogTitle}</h2>
        <p className="py-2">{blog.description}</p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <br />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className="mt-2">
          <p><span className="font-semibold">Posted Date:</span> {blog.postDate}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
