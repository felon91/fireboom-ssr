import Head from 'next/head';

import styles from './style.module.css';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p className="text-xl text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, dolorum ducimus eaque
        ipsum officiis omnis quae quaerat sapiente sed totam? Accusamus architecto consequatur
        distinctio dolore eligendi exercitationem, iure modi molestias nihil officiis perspiciatis
        possimus provident repudiandae. Accusantium alias aut autem cumque dicta dignissimos dolore
        eaque est, eveniet excepturi harum hic ipsam iste itaque, maxime natus nesciunt nihil non
        nostrum praesentium quas quod quos recusandae reprehenderit saepe sed similique tempora
        tempore, ut veniam veritatis vero voluptate voluptates. A adipisci aperiam asperiores
        commodi consequatur corporis dolores eligendi eos error harum laboriosam maiores minus nam
        possimus ratione saepe similique sit sunt tenetur, voluptatum.
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam aspernatur, consectetur
        ea error exercitationem harum quasi quidem? Ad, aliquid aperiam ducimus harum impedit labore
        laboriosam laudantium perferendis <span>asadasd</span> voluptatibus. Adipisci autem commodi
        itaque libero modi, nobis qui velit voluptate! A accusantium aliquid eum illum modi odio
        optio repellendus, totam!
      </p>
    </div>
  );
};

export default Home;
