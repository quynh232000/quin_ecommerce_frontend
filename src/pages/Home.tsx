
import { useTranslation } from "react-i18next";

const Home = () => {

const {t} = useTranslation()
  return (
   <div>{t('home.h1')}</div>
  );
};

export default Home;
