//React Hooks
import { useState } from 'react';

//styles
import styles from './choose-city.module.css';

//react router
import { Link } from 'react-router-dom';
 
//logo
import logo from '../../images/logo.svg';

//cities list
import { all_cities, popular_cities } from '../../datas/cities_list';

const ChooseCity = () => {
      
    const [city, setCity] = useState("");
    const [cityList, setCityList] = useState(all_cities);

    //Functions 
    const submit_form = event => event.preventDefault();
    const search_city = event => {
        setCity(event.target.value);
    }

    return (
        <div className={styles.container}>
            <img className={styles.logo} src={logo}/>

            <nav className={styles.tabs}>
                <ul className={styles.links}>
                   <Link className={styles.link} to="#">ثبت آگهی</Link>
                   <Link className={styles.link} to="#">درباره دیوار</Link>
                </ul>
            </nav>

            <p className={styles.title}>دﯾﻮار، ﭘﺎﯾﮕﺎه ﺧﺮﯾﺪ و ﻓﺮوش ﺑﯽ‌واﺳﻄﻪ‌!<br />
                اﮔﻪ دﻧﺒﺎل ﭼﯿﺰی ﻫﺴﺘﯽ، ﺷﻬﺮت رو اﻧﺘﺨﺎب ﮐﻦ و ﺗﻮ دﺳﺘﻪ‌ﺑﻨﺪی‌ﻫﺎ ﺑﻪ دﻧﺒﺎﻟﺶ ﺑﮕﺮد. اﮔﺮ ﻫﻢ ﻣﯽ‌ﺧﻮای ﭼﯿﺰی ﺑﻔﺮوﺷﯽ، ﭼﻨﺪ ﺗﺎ ﻋﮑﺲ ﺧﻮب ازش ﺑﮕﯿﺮ و آﮔﻬﯿﺖ رو ﺑﭽﺴﺒﻮن ﺑﻪ دﯾﻮار.
            </p>

            <form onSubmit={submit_form}>
               <input
                    value={city}
                    onChange={search_city} 
                    className={styles.search}
                    type="text"
                    placeholder='جستجوی شهر'
                />
                <div className={styles.city_list}>
                   {
                        city && cityList.filter(city_item => city_item.city_fa.includes(city) || city_item.city.includes(city))
                                .map(eachCity =>
                                        <Link className={styles.city_item}
                                            key={eachCity.id}
                                            to={`search/${eachCity.city}`}
                                            >{eachCity.city_fa}
                                        </Link>
                        ) 
                    }
               </div>
            </form>
             
            

            <div className={styles.popular_cities}>
               <h4 className={styles.popular_cities_title}>شهرهای پربازدید</h4>
               <div className={styles.popular_cities_itself}>
                    { popular_cities.map(popular_city =>
                         <Link
                             key={popular_city.id}
                             className={styles.popular_city}
                             to={`search/${popular_city.city}`}>
                             {popular_city.city_fa}
                        </Link>) 
                    }
               </div>
            </div>

        </div>
    );
};

export default ChooseCity;