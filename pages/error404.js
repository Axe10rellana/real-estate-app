//componentes
import Layout from "../components/Layout";

//componentes de next
import Link from "next/link";
import Image from "next/image";

//estilos css
import errorStyles from "../styles/Error404.module.css";

const Error404 = ({ title, message }) => {
  return (
    <Layout
      title="Error 404 Not Found | Real Estate App"
      description="Error 404 Not Found | Real Estate App"
    >
      <div className={errorStyles.container}>
        <Image
          src="/assets/error404.svg"
          alt="Error404"
          width={200}
          height={200}
          className={errorStyles.img404}
        />
        <div className={errorStyles.wrapper}>
          <h1 className={errorStyles.h1}>{title}</h1>
          <p className={errorStyles.message404}>{message}</p>
          <Link href="/">
            <a className={errorStyles.btnSuccessSm}>Volver</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Error404;
