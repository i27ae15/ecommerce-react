import { FC } from "react"
import CategoryItem from "../category-item/Category-item.component"
import "./directory.styles.scss"

interface Category {
    id: number;
    title: string;
    imageUrl: string;
}

interface CategoriesItemProps {
    categories: Array<Category>,
}

const Directory: FC<CategoriesItemProps> = ({categories}) => {

    return (
        <div className='categories-container'>
      {categories.map((category) => (

        <CategoryItem key={category['id']} title={category.title} imageUrl={category.imageUrl} />

      ))}

      </div>
    )

}


export default Directory;

