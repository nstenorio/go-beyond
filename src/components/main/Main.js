import arrowIcon from '../assets/img/iconmonstr-arrow-27.svg'
import style from './Main.module.css'
import axios from 'axios';
import { useState, useEffect } from "react";

const Main = () => {
    const [posts, setPosts] = useState([]);
    const [mainImage, setMainImage] = useState({
        title: "a Corebiz atua em toda jornada digital do usuário.",
        url: "https://via.placeholder.com/600"
    });

    const getPosts = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/albums/1/photos/");
            const data = response.data;
            console.log(data)
            setPosts(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPosts();
    }, []);

    const handleThumbnailClick = (post) => {
        setMainImage({
            title: post.title,
            url: post.url
        });
    };

    return (
        <main className={style.mainContainer}>
            <div>
                <div className={style.mainContentLeft}>
                    <h3>{mainImage.title}</h3>
                    <br />
                    <a href="https://www.corebiz.ag/">veja mais&nbsp;&nbsp;<img src={arrowIcon} alt="" /></a>
                    <div className={style.thumbnailUrlContainer}>
                            {posts.length === 0 ? (
                            <p>Carregando...</p>
                        ) : (
                            posts.slice(22, 26).map((post) => (
                                <ul className={style.thumbnailUrl} key={post.id}>
                                    <li>
                                        <img
                                            src={post.thumbnailUrl}
                                            alt={post.title}
                                            onClick={() => handleThumbnailClick(post)}
                                        />
                                    </li>
                                </ul>
                            ))
                        )}
                    </div>
                </div>
            </div>
            <div className={style.mainContentRight}>
                <div>
                    <img src={mainImage.url} className={style.mainImage} alt={mainImage.title} />
                </div>
            </div>
        </main>
    );
};

export default Main;
