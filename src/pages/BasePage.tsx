import { Helmet } from 'react-helmet';

import { Page } from '../ot-ui-components';

import Search from '../components/Search';
import NavBar from '../components/NavBar/NavBar';
import { externalLinks, mainMenuItems } from '../constants';
import Footer from '../components/Footer';

type BasePageProps = {
  children: React.ReactNode;
};
const BasePage = ({ children }: BasePageProps) => (
  <Page
    header={
      <NavBar
        name="Genetics"
        items={mainMenuItems}
        search={<Search embedded />}
      />
    }
    footer={<Footer externalLinks={externalLinks} />}
  >
    <Helmet
      defaultTitle="Open Targets Genetics"
      titleTemplate="%s | Open Targets Genetics"
    />
    {children}
  </Page>
);

export default BasePage;
