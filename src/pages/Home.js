import {useState, useEffect} from 'react';
import {getAllCategories} from './Api'
import Loader from '../components/Loader';
import CategoryList from '../components/CategoryList';
import Search from '../components/Search';
import { useHistory, useLocation } from 'react-router-dom';

export default function Home() {
    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState([])

    const{pathname, search} = useLocation()
    const{push} = useHistory()

   const handleSearch = (str) => {
        setFilteredCatalog(catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase())))
        push({
            pathname,
            search:`?search=${str}`
        })
   }
    useEffect(() => {
        getAllCategories().then(data => {
            setCatalog(data.categories)
            setFilteredCatalog(search ?
                data.categories.filter(item => item.itemCategory
                .toLowerCase()
                .includes(search.split("=")[1].toLowerCase())
                )
                :data.categories
             )
        }) 
    }, [])

    return (
        <>
          <Search cb={handleSearch}/>
            {catalog.length ? (
                 <CategoryList catalog={filteredCatalog} /> 
            ) : (
                <Loader />
            )}   
        </>
    )
}
