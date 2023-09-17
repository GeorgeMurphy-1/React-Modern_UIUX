import './feature.css';

type FeatureProps ={
  title: string;
  text: string;
}

const Feature: React.FunctionComponent<FeatureProps> = ({title, text}) => {
  return (
    <div className='gpt4__features-container__feature'>
      <div className="gpt4__features-container__feature-title ">
        <div></div>
        <h1>{title}</h1>
        </div>
        <div className="gpt4__features-container__feature-text">
          <p>{text}</p>
        </div>
      </div>
      
  )
}

export default Feature
