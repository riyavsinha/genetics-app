import { gql } from '../../__generated__';

export const SEARCH_QUERY = gql(`
  query SearchQuery($queryString: String!) {
    search(queryString: $queryString) {
      totalGenes
      totalVariants
      totalStudies
      genes {
        id
        symbol
        chromosome
        start
        end
      }
      variants {
        id
        rsId
        chromosome
        position
        refAllele
        altAllele
      }
      studies {
        studyId
        traitReported
        pmid
        pubAuthor
        pubDate
        pubJournal
        nInitial
        numAssocLoci
        hasSumstats
      }
    }
  }
`);
