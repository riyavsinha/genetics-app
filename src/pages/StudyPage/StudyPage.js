import { Query } from '@apollo/client/react/components';
import { Helmet } from 'react-helmet';
import { loader } from 'graphql.macro';
import { useQuery } from '@apollo/client';

import BasePage from './../BasePage';
import ScrollToTop from '../../components/ScrollToTop';
import ManhattanContainer from '../../components/ManhattanContainer';
import NotFoundPage from '../NotFoundPage';

import Header from './Header';
import Summary from '../../sections/study/Summary';

import { studyHasInfo } from '../../utils';

const STUDY_PAGE_QUERY = loader('../../queries/StudyPageQuery.gql');
const STUDY_HEADER_QUERY = loader('./StudyHeaderQuery.gql');

function StudyPage(props) {
  const { match } = props;
  const { studyId } = match.params;

  const { loading, data: headerData } = useQuery(STUDY_HEADER_QUERY, {
    variables: { studyId },
  });

  if (!studyId || (headerData && !headerData.studyInfo)) {
    return <NotFoundPage />;
  }

  return (
    <BasePage>
      <Header data={headerData} loading={loading} />
      <Summary studyId={studyId} />
      <Query query={STUDY_PAGE_QUERY} variables={{ studyId }}>
        {({ loading, error, data }) => {
          const isStudyWithInfo = studyHasInfo(data);
          const { hasSumstats } = isStudyWithInfo ? data.studyInfo : {};
          return (
            <>
              <ScrollToTop />
              <Helmet>
                <title>{studyId}</title>
              </Helmet>
              <ManhattanContainer
                {...{ studyId, hasSumstats, loading, error, data }}
              />
            </>
          );
        }}
      </Query>
    </BasePage>
  );
}

export default StudyPage;
