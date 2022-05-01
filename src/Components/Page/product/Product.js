
import { Link } from 'react-router-dom';

const Product = ({data}) => {
  const {img , title , about , price , _id} = data;

  return (
    <div >
      <div className="bg-slate-100 border-2 rounded-lg">
        <div className="" style={{height:'300px'}}>
        <img className='m-auto'  src={img} alt="" style={{height:'100%'}}/>
        </div>
        <div className="p-2">
          <h2 >{title}</h2>
          <strong>{price}</strong>
          <p className=''>{about}</p>
        </div>
        <Link to={`/product/${_id}`} className='w-full block text-center bg-sky-500 py-2 rounded hover:bg-sky-600'>select product</Link>
      </div>
    </div>
  );
};

export default Product;