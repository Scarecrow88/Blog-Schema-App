import '../css/articleContent.css';
import '../css/asideContent.css';
import '../css/coverContent.css';
import '../css/resultcontent.css';
import image1 from '../img/Image2.jpg';
import image2 from '../img/Image5.jpg';
import image3 from '../img/Image6.jpg';
import image4 from '../img/Image7.jpg';
import image5 from '../img/Image8.jpg';
export default function MainContent () {
    return (
        <main>
            <div className="containerbox">
                <div className="containerinfobox">
                    <h1>¡Todo es posible!</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui provident voluptatibus esse error 
                        dicta eum libero amet tempora.
                    </p>
                </div>
            </div>
            <div className="containerarticlebox">
                <article>
                    <h1>Título del artículo</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, minus ad libero temporibus 
                        repudiandae consequatur odit quas suscipit dicta, aspernatur earum vel voluptas sunt fugit 
                        voluptatem distinctio delectus quasi eveniet? Lorem ipsum dolor sit amet consectetur adipisicing 
                        elit. Molestias neque beatae, vero autem id ipsam! Saepe molestiae amet facilis delectus, ab 
                        minima corrupti repudiandae alias reprehenderit, soluta, eum tempore molestias! Lorem ipsum dolor 
                        sit amet consectetur, adipisicing elit. Aspernatur quibusdam alias temporibus nemo tenetur 
                        consequuntur voluptates molestias, reprehenderit numquam ad corrupti! Ipsum cum quibusdam quo 
                        laborum odio provident sed. Odit.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel quae blanditiis ducimus numquam 
                        vero accusamus aspernatur sit quibusdam, quos tenetur, ipsa, excepturi impedit nobis eaque non 
                        velit magni totam nemo! Libero pariatur voluptas sit vel dignissimos eos ducimus quia odit sed 
                        est voluptate nobis laborum animi dicta, ipsa excepturi, illum et harum. Quae cum laborum vero 
                        dolorem placeat saepe laboriosam? Explicabo iure, doloribus architecto debitis iusto earum error 
                        cumque, maiores id quis corporis beatae repellat itaque soluta odit. Nisi ducimus quisquam officia 
                        error et libero officiis, minus saepe? Reiciendis, eveniet.
                    </p>
                    <img src={image1} alt="Artículo" />
                    <h2>Subtitulo del articulo</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi fugiat perferendis nesciunt doloribus, 
                        dolorem consequatur at, laudantium unde reprehenderit porro quo sit tempora explicabo ipsa. Ad, 
                        mollitia necessitatibus? Dolorum, corrupti! Et tempora explicabo quisquam nulla similique maiores 
                        odit, eum porro perferendis, dolorum aut, deserunt ducimus debitis! Distinctio accusantium inventore 
                        culpa deleniti, rem illum tempore odio. Et ratione laborum officiis porro! Eos quas quam ab dignissimos 
                        debitis blanditiis doloribus rem accusantium itaque iure facere reiciendis porro quibusdam asperiores 
                        dolorem fugit neque, quos quia excepturi ratione rerum ipsum? Magni dignissimos aut praesentium. 
                        Delectus officiis ea, vel nam quidem non illum repudiandae possimus eligendi quod? Illum voluptates 
                        in consectetur quisquam soluta, voluptatibus nisi, rerum magnam labore, quod aliquam officia! Aliquam 
                        nam cumque dolores. Necessitatibus sit eaque illo error omnis, numquam voluptate perspiciatis libero 
                        ea consequatur veniam aspernatur reprehenderit fugit eveniet nobis dolores exercitationem consequuntur 
                        delectus minus dolore maxime tempora sapiente aut amet. Nesciunt. Asperiores, totam amet repudiandae 
                        vel, accusantium quod provident sapiente nesciunt facere voluptate odit magnam. Nobis ea minima rerum 
                        adipisci magni in, id, aliquam officiis, ipsam amet totam debitis maxime qui.
                    </p>
                    <img src={image2} alt="Artículo" />
                </article>
                {/* <div className="containerasidebox">
                    {Array.from({ length: 3 }).map((_, i) => (
                        <aside key={i}>
                            <img src={`./img/Image${6 + i}.jpg`} alt={`Aside ${i + 1}`} />
                            <h2>Título del artículo</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum dolor qui blanditiis tenetur 
                                veritatis tempore, omnis assumenda quidem quas facere, vero ea recusandae adipisci dignissimos 
                                tempora eius autem minima harum.
                            </p>
                            <a href="">
                                <button>Read more</button>
                            </a>
                        </aside>
                    ))}
                </div> */}
                <div className="containerasidebox">
                    <aside key="1">
                        <img src={image3} alt={`Aside 1`} />
                        <h2>Título del artículo</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum dolor qui blanditiis tenetur 
                            veritatis tempore, omnis assumenda quidem quas facere, vero ea recusandae adipisci dignissimos 
                            tempora eius autem minima harum.
                        </p>
                        <a href="">
                            <button>Read more</button>
                        </a>
                    </aside>
                    <aside key="2">
                        <img src={image4} alt={`Aside 2`} />
                        <h2>Título del artículo</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum dolor qui blanditiis tenetur 
                            veritatis tempore, omnis assumenda quidem quas facere, vero ea recusandae adipisci dignissimos 
                            tempora eius autem minima harum.
                        </p>
                        <a href="">
                            <button>Read more</button>
                        </a>
                    </aside>
                    <aside key="3">
                        <img src={image5} alt={`Aside 3`} />
                        <h2>Título del artículo</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum dolor qui blanditiis tenetur 
                            veritatis tempore, omnis assumenda quidem quas facere, vero ea recusandae adipisci dignissimos 
                            tempora eius autem minima harum.
                        </p>
                        <a href="">
                            <button>Read more</button>
                        </a>
                    </aside>
                </div>
            </div>
        </main>
    );
}