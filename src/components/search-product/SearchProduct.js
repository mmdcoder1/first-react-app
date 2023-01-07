//Router
import { useParams } from "react-router-dom";

const SearchProduct = () => {
    const { value } = useParams();
    return (
        <div>
            {value}
        </div>
    );
};

export default SearchProduct;