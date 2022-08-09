import { FC } from 'react';
import './category-item.styles.scss';


interface CategoryItemProps {
  title: string;
  imageUrl: string;
  key: number;
}

const CategoryItem: FC<CategoryItemProps> = ( {key, title, imageUrl} ) => {

    return (

        <div key={key} className='category-container'>

            <div className='background-image' style={{
              backgroundImage: `url(${imageUrl})`
            }} />

          <div className='category-body-container'>

            <h2>{title}</h2>
            <p>Show now.</p>

          </div>

        </div>

    );

}


export default CategoryItem;