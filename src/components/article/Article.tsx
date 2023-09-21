import './article.css';

type imageURL = {
  imgUrl: string,
  date: string,
  title: string,
}


const Article: React.FunctionComponent<imageURL> = ({imgUrl,date, title}) => {
  return (
    <div className='gpt4__blog-container_article'>
      <div className='gpt4__blog-container_article-image'>
        <img src={imgUrl} alt="blog image" />
      </div>
      <div className="gpt4__blog-container_article-card">
      <div>
        <p>{date}</p>
        <h3>{title}</h3>
      </div>
      <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article
