//styles
import styles from './choose-city.module.css';

//react router
import { Link } from 'react-router-dom';
 
//logo
import logo from '../../images/logo.svg';

const ChooseCity = () => {
    return (
        <div className={styles.container}>
            <img className={styles.logo} src={logo}/>
            <nav className={styles.tabs}>
                <ul className={styles.links}>
                   <a className={styles.link} href='#'>ثبت آگهی</a>
                   <a className={styles.link} href='#'>درباره دیوار</a>
                </ul>
            </nav>
            <p className={styles.title}>دﯾﻮار، ﭘﺎﯾﮕﺎه ﺧﺮﯾﺪ و ﻓﺮوش ﺑﯽ‌واﺳﻄﻪ‌!<br />
                اﮔﻪ دﻧﺒﺎل ﭼﯿﺰی ﻫﺴﺘﯽ، ﺷﻬﺮت رو اﻧﺘﺨﺎب ﮐﻦ و ﺗﻮ دﺳﺘﻪ‌ﺑﻨﺪی‌ﻫﺎ ﺑﻪ دﻧﺒﺎﻟﺶ ﺑﮕﺮد. اﮔﺮ ﻫﻢ ﻣﯽ‌ﺧﻮای ﭼﯿﺰی ﺑﻔﺮوﺷﯽ، ﭼﻨﺪ ﺗﺎ ﻋﮑﺲ ﺧﻮب ازش ﺑﮕﯿﺮ و آﮔﻬﯿﺖ رو ﺑﭽﺴﺒﻮن ﺑﻪ دﯾﻮار.
            </p>
            <form>
               <input className={styles.search} type="text" placeholder='جستجوی شهر'/>
            </form>
            <div className={styles.popular_cities}>
               <h4 className={styles.popular_cities_title}>شهرهای پربازدید</h4>
               <div className={styles.popular_cities_itself}>
                    <a className={styles.popular_city} href='#'>تهران</a>
                    <a className={styles.popular_city} href='#'>مشهد</a>
                    <a className={styles.popular_city} href='#'>کرج</a>
                    <a className={styles.popular_city} href='#'>شیراز</a>
                    <a className={styles.popular_city} href='#'>اصفهان</a>
                    <a className={styles.popular_city} href='#'>اهواز</a>
                    <a className={styles.popular_city} href='#'>تبریز</a>
                    <a className={styles.popular_city} href='#'>کرمانشاه</a>
                    <a className={styles.popular_city} href='#'>قم</a>
                    <a className={styles.popular_city} href='#'>رشت</a>
               </div>
            </div>
        </div>
    );
};

export default ChooseCity;