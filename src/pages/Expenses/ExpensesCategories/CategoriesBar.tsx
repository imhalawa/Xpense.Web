import Paper from "@mui/material/Paper";
import CategoryChip from "../ExpenseCategoryChip/CategoryChip.tsx";
import {ICategory} from "../../../typings/ICategory.ts";

interface CategoriesBarProps {
    categories: ICategory[];
}


const CategoriesBar = ({categories}: CategoriesBarProps) => {

    const handleClick = (id: number) => {
        console.log(`Category with id ${id} clicked!`);
    };

    return <>
        <Paper
            sx={{
                display: 'flex',
                backgroundColor: 'white',
                boxShadow: 'none',
                justifyContent: 'start',
                flexWrap: 'wrap',
                columnGap: 1,
                listStyle: 'none',
                p: 0.5,
                m: 0,
            }}
            component="ul"
        >
            {
                categories.map(category => (
                    <CategoryChip
                        key={category.id}
                        id={category.id}
                        name={category.name}
                        priority={category.priority}
                        onClick={() => handleClick(category.id)}
                    />
                ))
            }
        </Paper>
    </>
}

export default CategoriesBar;