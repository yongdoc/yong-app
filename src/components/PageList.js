const PageList = ({pages, title}) => {

  return ( 
    <div className="pagelist">
      <h2>{title}</h2>
      {pages.map((page) => (
        <div className="page-preview" key={page.id}>
          <h2>{page.title}</h2>
          <p>Uploaded by {page.author}</p>
        </div>
      ))}
    </div>
   );
}
 
export default PageList