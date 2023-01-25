/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Long` scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: number;
};

/** This element represents the tag variant with its associated statistics */
export type CredSetTagElement = {
  __typename?: 'CredSetTagElement';
  /** Multisignal Method */
  MultisignalMethod: Scalars['String'];
  /** beta */
  beta: Scalars['Float'];
  /** Is over 95 percentile */
  is95: Scalars['Boolean'];
  /** Is over 99 percentile */
  is99: Scalars['Boolean'];
  /** Log ABF */
  logABF: Scalars['Float'];
  /** Posterior Probability */
  postProb: Scalars['Float'];
  /** p-val */
  pval: Scalars['Float'];
  /** SE */
  se: Scalars['Float'];
  /** Tag Variant in the credibleset table */
  tagVariant: Variant;
};

/** A list of rows with each link */
export type DistanceElement = {
  __typename?: 'DistanceElement';
  aggregatedScore: Scalars['Float'];
  sourceId: Scalars['String'];
  tissues: Array<DistanceTissue>;
  typeId: Scalars['String'];
};

export type DistanceTissue = {
  __typename?: 'DistanceTissue';
  /** Distance to the canonical TSS */
  distance?: Maybe<Scalars['Long']>;
  /** Quantile of the score */
  quantile?: Maybe<Scalars['Float']>;
  /** Score 1 / Distance */
  score?: Maybe<Scalars['Float']>;
  tissue: Tissue;
};

export type FPredTissue = {
  __typename?: 'FPredTissue';
  maxEffectLabel?: Maybe<Scalars['String']>;
  maxEffectScore?: Maybe<Scalars['Float']>;
  tissue: Tissue;
};

/** A list of rows with each link */
export type FunctionalPredictionElement = {
  __typename?: 'FunctionalPredictionElement';
  aggregatedScore: Scalars['Float'];
  sourceId: Scalars['String'];
  tissues: Array<FPredTissue>;
  typeId: Scalars['String'];
};

/** A list of rows with each link */
export type G2VSchema = {
  __typename?: 'G2VSchema';
  /** Distance structure definition */
  distances: Array<G2VSchemaElement>;
  /** qtl structure definition */
  functionalPredictions: Array<G2VSchemaElement>;
  /** qtl structure definition */
  intervals: Array<G2VSchemaElement>;
  /** qtl structure definition */
  qtls: Array<G2VSchemaElement>;
};

/** A list of rows with each link */
export type G2VSchemaElement = {
  __typename?: 'G2VSchemaElement';
  id: Scalars['String'];
  /** PubmedID */
  pmid?: Maybe<Scalars['String']>;
  sourceDescriptionBreakdown?: Maybe<Scalars['String']>;
  sourceDescriptionOverview?: Maybe<Scalars['String']>;
  sourceId: Scalars['String'];
  sourceLabel?: Maybe<Scalars['String']>;
  tissues: Array<Tissue>;
};

export type GwasColocalisation = {
  __typename?: 'GWASColocalisation';
  /** Beta */
  beta?: Maybe<Scalars['Float']>;
  /** H3 */
  h3: Scalars['Float'];
  /** H4 */
  h4: Scalars['Float'];
  /** Tag variant ID as ex. 1_12345_A_T */
  indexVariant: Variant;
  /** Log2 H4/H3 */
  log2h4h3: Scalars['Float'];
  /** study ID */
  study: Study;
};

export type GwasColocalisationForQtlWithGene = {
  __typename?: 'GWASColocalisationForQTLWithGene';
  /** H3 */
  h3: Scalars['Float'];
  /** H4 */
  h4: Scalars['Float'];
  /** Tag variant ID as ex. 1_12345_A_T */
  leftVariant: Variant;
  /** Log2 H4/H3 */
  log2h4h3: Scalars['Float'];
  /** Phenotype ID */
  phenotypeId: Scalars['String'];
  /** QTL study ID */
  qtlStudyId: Scalars['String'];
  /** GWAS Study */
  study: Study;
  /** QTL bio-feature */
  tissue: Tissue;
};

export type GwaslrColocalisation = {
  __typename?: 'GWASLRColocalisation';
  /** H3 */
  h3: Scalars['Float'];
  /** H4 */
  h4: Scalars['Float'];
  /** study ID */
  leftStudy: Study;
  /** Tag variant ID as ex. 1_12345_A_T */
  leftVariant: Variant;
  /** Log2 H4/H3 */
  log2h4h3: Scalars['Float'];
  /** study ID */
  rightStudy: Study;
  /** Tag variant ID as ex. 1_12345_A_T */
  rightVariant: Variant;
};

export type Gecko = {
  __typename?: 'Gecko';
  geneTagVariants: Array<GeneTagVariant>;
  genes: Array<Gene>;
  indexVariants: Array<Variant>;
  studies: Array<Study>;
  tagVariantIndexVariantStudies: Array<TagVariantIndexVariantStudy>;
  tagVariants: Array<Variant>;
};

export type Gene = {
  __typename?: 'Gene';
  bioType?: Maybe<Scalars['String']>;
  chromosome?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  end?: Maybe<Scalars['Long']>;
  exons: Array<Scalars['Long']>;
  fwdStrand?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
  start?: Maybe<Scalars['Long']>;
  symbol?: Maybe<Scalars['String']>;
  tss?: Maybe<Scalars['Long']>;
};

/** A list of rows with each link */
export type GeneForVariant = {
  __typename?: 'GeneForVariant';
  distances: Array<DistanceElement>;
  functionalPredictions: Array<FunctionalPredictionElement>;
  /** Associated scored gene */
  gene: Gene;
  intervals: Array<IntervalElement>;
  overallScore: Scalars['Float'];
  qtls: Array<QtlElement>;
  /** Associated scored variant */
  variant: Scalars['String'];
};

export type GeneTagVariant = {
  __typename?: 'GeneTagVariant';
  geneId: Scalars['String'];
  overallScore: Scalars['Float'];
  tagVariantId: Scalars['String'];
};

/** This object represent a link between a triple (study, trait, index_variant) and a tag variant via an expansion method (either ldExpansion or FineMapping) */
export type IndexVariantAssociation = {
  __typename?: 'IndexVariantAssociation';
  afr1000GProp?: Maybe<Scalars['Float']>;
  amr1000GProp?: Maybe<Scalars['Float']>;
  beta?: Maybe<Scalars['Float']>;
  betaCILower?: Maybe<Scalars['Float']>;
  betaCIUpper?: Maybe<Scalars['Float']>;
  direction?: Maybe<Scalars['String']>;
  eas1000GProp?: Maybe<Scalars['Float']>;
  eur1000GProp?: Maybe<Scalars['Float']>;
  log10Abf?: Maybe<Scalars['Float']>;
  /** n cases */
  nCases: Scalars['Long'];
  /** n total cases (n initial + n replication) */
  nTotal: Scalars['Long'];
  oddsRatio?: Maybe<Scalars['Float']>;
  oddsRatioCILower?: Maybe<Scalars['Float']>;
  oddsRatioCIUpper?: Maybe<Scalars['Float']>;
  /** study ID */
  overallR2?: Maybe<Scalars['Float']>;
  posteriorProbability?: Maybe<Scalars['Float']>;
  /** p-val between a study and an the provided index variant */
  pval: Scalars['Float'];
  /** p-val between a study and an the provided index variant */
  pvalExponent: Scalars['Long'];
  /** p-val between a study and an the provided index variant */
  pvalMantissa: Scalars['Float'];
  sas1000GProp?: Maybe<Scalars['Float']>;
  /** study ID */
  study: Study;
  /** Tag variant ID as ex. 1_12345_A_T */
  tagVariant: Variant;
};

/** A list of rows with each link */
export type IndexVariantsAndStudiesForTagVariant = {
  __typename?: 'IndexVariantsAndStudiesForTagVariant';
  /** A list of associations connected to a Index variant and a Study through some expansion methods */
  associations: Array<TagVariantAssociation>;
};

/** A list of rows with each link */
export type IntervalElement = {
  __typename?: 'IntervalElement';
  aggregatedScore: Scalars['Float'];
  sourceId: Scalars['String'];
  tissues: Array<IntervalTissue>;
  typeId: Scalars['String'];
};

export type IntervalTissue = {
  __typename?: 'IntervalTissue';
  quantile: Scalars['Float'];
  score?: Maybe<Scalars['Float']>;
  tissue: Tissue;
};

/** This element represents a Manhattan like plot */
export type Manhattan = {
  __typename?: 'Manhattan';
  /** A list of associations */
  associations: Array<ManhattanAssociation>;
  /** A list of overlapped studies */
  topOverlappedStudies?: Maybe<TopOverlappedStudies>;
};


/** This element represents a Manhattan like plot */
export type ManhattanTopOverlappedStudiesArgs = {
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type ManhattanAssociation = {
  __typename?: 'ManhattanAssociation';
  /** A list of best genes associated */
  bestColocGenes: Array<ScoredGene>;
  /** A list of best genes associated */
  bestGenes: Array<ScoredGene>;
  /** A list of best L2G scored genes associated */
  bestLocus2Genes: Array<ScoredGene>;
  beta?: Maybe<Scalars['Float']>;
  betaCILower?: Maybe<Scalars['Float']>;
  betaCIUpper?: Maybe<Scalars['Float']>;
  /** The cardinal of the set defined as tag variants for an index variant coming from crediblesets */
  credibleSetSize?: Maybe<Scalars['Long']>;
  direction?: Maybe<Scalars['String']>;
  /** The cardinal of the set defined as tag variants for an index variant coming from ld expansion */
  ldSetSize?: Maybe<Scalars['Long']>;
  oddsRatio?: Maybe<Scalars['Float']>;
  oddsRatioCILower?: Maybe<Scalars['Float']>;
  oddsRatioCIUpper?: Maybe<Scalars['Float']>;
  /** Computed p-Value */
  pval: Scalars['Float'];
  pvalExponent: Scalars['Long'];
  pvalMantissa: Scalars['Float'];
  /** The cardinal of the set defined as tag variants for an index variant coming from any expansion */
  totalSetSize: Scalars['Long'];
  /** Index variant */
  variant: Variant;
};

export type Metadata = {
  __typename?: 'Metadata';
  apiVersion: Version;
  dataVersion: Version;
  name: Scalars['String'];
};

/** This element represents an overlap between two variants for two studies */
export type Overlap = {
  __typename?: 'Overlap';
  distinctA: Scalars['Long'];
  distinctB: Scalars['Long'];
  overlapAB: Scalars['Long'];
  variantIdA: Scalars['String'];
  variantIdB: Scalars['String'];
};

export type OverlappedInfoForStudy = {
  __typename?: 'OverlappedInfoForStudy';
  overlappedVariantsForStudies: Array<OverlappedVariantsStudies>;
  /** A study object */
  study?: Maybe<Study>;
  variantIntersectionSet: Array<Scalars['String']>;
};

/** This element represent a overlap between two stduies */
export type OverlappedStudy = {
  __typename?: 'OverlappedStudy';
  /** Orig variant id which is been used for computing the overlap with the referenced study */
  numOverlapLoci: Scalars['Int'];
  /** A study object */
  study?: Maybe<Study>;
  /** A study object */
  studyId: Scalars['String'];
};

/** This element represents an overlap between two studies */
export type OverlappedVariantsStudies = {
  __typename?: 'OverlappedVariantsStudies';
  /** Orig variant id which is been used for computing the overlap with the referenced study */
  overlaps: Array<Overlap>;
  /** A study object */
  study?: Maybe<Study>;
};

export type Pagination = {
  index: Scalars['Int'];
  size: Scalars['Int'];
};

/** This element represents a PheWAS like plot */
export type PheWas = {
  __typename?: 'PheWAS';
  /** A list of associations */
  associations: Array<PheWasAssociation>;
  /** A total number of unique GWAS studies in the summary stats table */
  totalGWASStudies: Scalars['Long'];
};

/** This element represents an association between a variant and a reported trait through a study */
export type PheWasAssociation = {
  __typename?: 'PheWASAssociation';
  beta?: Maybe<Scalars['Float']>;
  /** Effect Allele Frequency */
  eaf?: Maybe<Scalars['Float']>;
  nCases?: Maybe<Scalars['Long']>;
  /** Total sample size (variant level) */
  nTotal?: Maybe<Scalars['Long']>;
  /** Odds ratio (if case control) */
  oddsRatio?: Maybe<Scalars['Float']>;
  /** Computed p-Value */
  pval: Scalars['Float'];
  /** Standard error */
  se?: Maybe<Scalars['Float']>;
  /** Study Object */
  study?: Maybe<Study>;
  studyId: Scalars['String'];
};

export type QtlColocalisation = {
  __typename?: 'QTLColocalisation';
  /** Beta */
  beta?: Maybe<Scalars['Float']>;
  /** Gene */
  gene: Gene;
  /** H3 */
  h3: Scalars['Float'];
  /** H4 */
  h4: Scalars['Float'];
  /** Tag variant ID as ex. 1_12345_A_T */
  indexVariant: Variant;
  /** Log2 H4/H3 */
  log2h4h3: Scalars['Float'];
  /** QTL Phenotype ID */
  phenotypeId: Scalars['String'];
  /** QTL study ID */
  qtlStudyName: Scalars['String'];
  /** QTL bio-feature */
  tissue: Tissue;
};

/** A list of rows with each link */
export type QtlElement = {
  __typename?: 'QTLElement';
  aggregatedScore: Scalars['Float'];
  sourceId: Scalars['String'];
  tissues: Array<QtlTissue>;
  typeId: Scalars['String'];
};

export type QtlTissue = {
  __typename?: 'QTLTissue';
  beta?: Maybe<Scalars['Float']>;
  pval?: Maybe<Scalars['Float']>;
  quantile: Scalars['Float'];
  tissue: Tissue;
};

export type Query = {
  __typename?: 'Query';
  colocalisationsForGene: Array<GwasColocalisationForQtlWithGene>;
  gecko?: Maybe<Gecko>;
  geneInfo?: Maybe<Gene>;
  genes: Array<Gene>;
  genesForVariant: Array<GeneForVariant>;
  genesForVariantSchema: G2VSchema;
  gwasColocalisation: Array<GwasColocalisation>;
  gwasColocalisationForRegion: Array<GwaslrColocalisation>;
  gwasCredibleSet: Array<CredSetTagElement>;
  gwasRegional: Array<RegionalAssociation>;
  indexVariantsAndStudiesForTagVariant: IndexVariantsAndStudiesForTagVariant;
  manhattan: Manhattan;
  /** Return Open Targets Genetics API metadata */
  meta: Metadata;
  overlapInfoForStudy: OverlappedInfoForStudy;
  pheWAS: PheWas;
  qtlColocalisation: Array<QtlColocalisation>;
  qtlCredibleSet: Array<CredSetTagElement>;
  qtlRegional: Array<RegionalAssociation>;
  regionPlot?: Maybe<Gecko>;
  search: SearchResult;
  studiesAndLeadVariantsForGene: Array<StudiesAndLeadVariantsForGene>;
  studiesAndLeadVariantsForGeneByL2G: Array<V2Dl2GRowByGene>;
  studiesForGene: Array<StudyForGene>;
  studyAndLeadVariantInfo?: Maybe<StudiesAndLeadVariantsForGene>;
  studyInfo?: Maybe<Study>;
  studyLocus2GeneTable: SlgTable;
  tagVariantsAndStudiesForIndexVariant: TagVariantsAndStudiesForIndexVariant;
  topOverlappedStudies: TopOverlappedStudies;
  variantInfo?: Maybe<Variant>;
};


export type QueryColocalisationsForGeneArgs = {
  geneId: Scalars['String'];
};


export type QueryGeckoArgs = {
  chromosome: Scalars['String'];
  end: Scalars['Long'];
  start: Scalars['Long'];
};


export type QueryGeneInfoArgs = {
  geneId: Scalars['String'];
};


export type QueryGenesArgs = {
  chromosome: Scalars['String'];
  end: Scalars['Long'];
  start: Scalars['Long'];
};


export type QueryGenesForVariantArgs = {
  variantId: Scalars['String'];
};


export type QueryGwasColocalisationArgs = {
  studyId: Scalars['String'];
  variantId: Scalars['String'];
};


export type QueryGwasColocalisationForRegionArgs = {
  chromosome: Scalars['String'];
  end: Scalars['Long'];
  start: Scalars['Long'];
};


export type QueryGwasCredibleSetArgs = {
  studyId: Scalars['String'];
  variantId: Scalars['String'];
};


export type QueryGwasRegionalArgs = {
  chromosome: Scalars['String'];
  end: Scalars['Long'];
  start: Scalars['Long'];
  studyId: Scalars['String'];
};


export type QueryIndexVariantsAndStudiesForTagVariantArgs = {
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  variantId: Scalars['String'];
};


export type QueryManhattanArgs = {
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  studyId: Scalars['String'];
};


export type QueryOverlapInfoForStudyArgs = {
  studyId: Scalars['String'];
  studyIds: Array<Scalars['String']>;
};


export type QueryPheWasArgs = {
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  variantId: Scalars['String'];
};


export type QueryQtlColocalisationArgs = {
  studyId: Scalars['String'];
  variantId: Scalars['String'];
};


export type QueryQtlCredibleSetArgs = {
  bioFeature: Scalars['String'];
  geneId: Scalars['String'];
  studyId: Scalars['String'];
  variantId: Scalars['String'];
};


export type QueryQtlRegionalArgs = {
  bioFeature: Scalars['String'];
  chromosome: Scalars['String'];
  end: Scalars['Long'];
  geneId: Scalars['String'];
  start: Scalars['Long'];
  studyId: Scalars['String'];
};


export type QueryRegionPlotArgs = {
  optionalGeneId?: InputMaybe<Scalars['String']>;
  optionalStudyId?: InputMaybe<Scalars['String']>;
  optionalVariantId?: InputMaybe<Scalars['String']>;
};


export type QuerySearchArgs = {
  page?: InputMaybe<Pagination>;
  queryString: Scalars['String'];
};


export type QueryStudiesAndLeadVariantsForGeneArgs = {
  geneId: Scalars['String'];
};


export type QueryStudiesAndLeadVariantsForGeneByL2GArgs = {
  geneId: Scalars['String'];
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};


export type QueryStudiesForGeneArgs = {
  geneId: Scalars['String'];
};


export type QueryStudyAndLeadVariantInfoArgs = {
  studyId: Scalars['String'];
  variantId: Scalars['String'];
};


export type QueryStudyInfoArgs = {
  studyId: Scalars['String'];
};


export type QueryStudyLocus2GeneTableArgs = {
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  studyId: Scalars['String'];
  variantId: Scalars['String'];
};


export type QueryTagVariantsAndStudiesForIndexVariantArgs = {
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  variantId: Scalars['String'];
};


export type QueryTopOverlappedStudiesArgs = {
  pageIndex?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  studyId: Scalars['String'];
};


export type QueryVariantInfoArgs = {
  variantId: Scalars['String'];
};

/** Variant with a p-val */
export type RegionalAssociation = {
  __typename?: 'RegionalAssociation';
  /** p-val */
  pval: Scalars['Float'];
  /** Summary Stats simple variant information */
  variant: Variant;
};

export type SlgRow = {
  __typename?: 'SLGRow';
  distanceToLocus: Scalars['Long'];
  /** Gene */
  gene: Gene;
  hasColoc: Scalars['Boolean'];
  yProbaDistance: Scalars['Float'];
  yProbaInteraction: Scalars['Float'];
  yProbaModel: Scalars['Float'];
  yProbaMolecularQTL: Scalars['Float'];
  yProbaPathogenicity: Scalars['Float'];
};

export type SlgTable = {
  __typename?: 'SLGTable';
  rows: Array<SlgRow>;
  /** Study */
  study?: Maybe<Study>;
  /** Variant */
  variant?: Maybe<Variant>;
};

/** This object link a Gene with a score */
export type ScoredGene = {
  __typename?: 'ScoredGene';
  /** Gene Info */
  gene: Gene;
  /** Score a Float number between [0. .. 1.] */
  score: Scalars['Float'];
};

/** Search data by a query string */
export type SearchResult = {
  __typename?: 'SearchResult';
  /** Gene search result list */
  genes: Array<Gene>;
  /** Study search result list */
  studies: Array<Study>;
  /** Total number of genes found */
  totalGenes: Scalars['Long'];
  /** Total number of studies found */
  totalStudies: Scalars['Long'];
  /** Total number of variants found */
  totalVariants: Scalars['Long'];
  /** Variant search result list */
  variants: Array<Variant>;
};

/** A list of Studies and Lead Variants for a Gene */
export type StudiesAndLeadVariantsForGene = {
  __typename?: 'StudiesAndLeadVariantsForGene';
  beta?: Maybe<Scalars['Float']>;
  betaCILower?: Maybe<Scalars['Float']>;
  betaCIUpper?: Maybe<Scalars['Float']>;
  direction?: Maybe<Scalars['String']>;
  /** Tag variant ID as ex. 1_12345_A_T */
  indexVariant: Variant;
  oddsRatio?: Maybe<Scalars['Float']>;
  oddsRatioCILower?: Maybe<Scalars['Float']>;
  oddsRatioCIUpper?: Maybe<Scalars['Float']>;
  /** p-val between a study and an the provided index variant */
  pval: Scalars['Float'];
  /** p-val between a study and an the provided index variant */
  pvalExponent: Scalars['Long'];
  /** p-val between a study and an the provided index variant */
  pvalMantissa: Scalars['Float'];
  /** study ID */
  study: Study;
};

export type Study = {
  __typename?: 'Study';
  ancestryInitial: Array<Scalars['String']>;
  ancestryReplication: Array<Scalars['String']>;
  /** Contains summary statistical information */
  hasSumstats?: Maybe<Scalars['Boolean']>;
  nCases?: Maybe<Scalars['Long']>;
  nInitial?: Maybe<Scalars['Long']>;
  nReplication?: Maybe<Scalars['Long']>;
  /** n total cases (n initial + n replication) */
  nTotal: Scalars['Long'];
  numAssocLoci?: Maybe<Scalars['Long']>;
  /** PubMed ID for the corresponding publication */
  pmid?: Maybe<Scalars['String']>;
  pubAuthor?: Maybe<Scalars['String']>;
  /** Publication Date as YYYY-MM-DD */
  pubDate?: Maybe<Scalars['String']>;
  /** Publication Journal name */
  pubJournal?: Maybe<Scalars['String']>;
  pubTitle?: Maybe<Scalars['String']>;
  /** Database or BioBank providing the study */
  source?: Maybe<Scalars['String']>;
  studyId: Scalars['String'];
  traitCategory?: Maybe<Scalars['String']>;
  /** A list of curated efo codes */
  traitEfos: Array<Scalars['String']>;
  /** Trait Label as reported on the publication */
  traitReported: Scalars['String'];
};

export type StudyForGene = {
  __typename?: 'StudyForGene';
  /** A study object */
  study: Study;
};

/** This object represent a link between a triple (study, trait, index_variant) and a tag variant via an expansion method (either ldExpansion or FineMapping) */
export type TagVariantAssociation = {
  __typename?: 'TagVariantAssociation';
  afr1000GProp?: Maybe<Scalars['Float']>;
  amr1000GProp?: Maybe<Scalars['Float']>;
  beta?: Maybe<Scalars['Float']>;
  betaCILower?: Maybe<Scalars['Float']>;
  betaCIUpper?: Maybe<Scalars['Float']>;
  direction?: Maybe<Scalars['String']>;
  eas1000GProp?: Maybe<Scalars['Float']>;
  eur1000GProp?: Maybe<Scalars['Float']>;
  /** Tag variant ID as ex. 1_12345_A_T */
  indexVariant: Variant;
  log10Abf?: Maybe<Scalars['Float']>;
  /** n cases */
  nCases: Scalars['Long'];
  /** n total cases (n initial + n replication) */
  nTotal: Scalars['Long'];
  oddsRatio?: Maybe<Scalars['Float']>;
  oddsRatioCILower?: Maybe<Scalars['Float']>;
  oddsRatioCIUpper?: Maybe<Scalars['Float']>;
  /** study ID */
  overallR2?: Maybe<Scalars['Float']>;
  posteriorProbability?: Maybe<Scalars['Float']>;
  /** p-val between a study and an the provided index variant */
  pval: Scalars['Float'];
  /** p-val between a study and an the provided index variant */
  pvalExponent: Scalars['Long'];
  /** p-val between a study and an the provided index variant */
  pvalMantissa: Scalars['Float'];
  sas1000GProp?: Maybe<Scalars['Float']>;
  /** study ID */
  study: Study;
};

export type TagVariantIndexVariantStudy = {
  __typename?: 'TagVariantIndexVariantStudy';
  beta?: Maybe<Scalars['Float']>;
  betaCILower?: Maybe<Scalars['Float']>;
  betaCIUpper?: Maybe<Scalars['Float']>;
  direction?: Maybe<Scalars['String']>;
  indexVariantId: Scalars['String'];
  oddsRatio?: Maybe<Scalars['Float']>;
  oddsRatioCILower?: Maybe<Scalars['Float']>;
  oddsRatioCIUpper?: Maybe<Scalars['Float']>;
  posteriorProbability?: Maybe<Scalars['Float']>;
  pval: Scalars['Float'];
  /** p-val between a study and an the provided index variant */
  pvalExponent: Scalars['Long'];
  /** p-val between a study and an the provided index variant */
  pvalMantissa: Scalars['Float'];
  r2?: Maybe<Scalars['Float']>;
  studyId: Scalars['String'];
  tagVariantId: Scalars['String'];
};

/** A list of rows with each link */
export type TagVariantsAndStudiesForIndexVariant = {
  __typename?: 'TagVariantsAndStudiesForIndexVariant';
  /** A list of associations connected to a Index variant and a Study through some expansion methods */
  associations: Array<IndexVariantAssociation>;
};

export type Tissue = {
  __typename?: 'Tissue';
  id: Scalars['String'];
  name: Scalars['String'];
};

/** This element represent a overlap between two stduies */
export type TopOverlappedStudies = {
  __typename?: 'TopOverlappedStudies';
  /** A study object */
  study?: Maybe<Study>;
  /** Top N studies ordered by loci overlap */
  topStudiesByLociOverlap: Array<OverlappedStudy>;
};

export type V2DBeta = {
  __typename?: 'V2DBeta';
  betaCI?: Maybe<Scalars['Float']>;
  betaCILower?: Maybe<Scalars['Float']>;
  betaCIUpper?: Maybe<Scalars['Float']>;
  direction?: Maybe<Scalars['String']>;
};

export type V2Dl2GRowByGene = {
  __typename?: 'V2DL2GRowByGene';
  beta: V2DBeta;
  odds: V2DOdds;
  pval: Scalars['Float'];
  pvalExponent: Scalars['Long'];
  pvalMantissa: Scalars['Float'];
  /** Study */
  study: Study;
  /** Variant */
  variant: Variant;
  yProbaDistance: Scalars['Float'];
  yProbaInteraction: Scalars['Float'];
  yProbaModel: Scalars['Float'];
  yProbaMolecularQTL: Scalars['Float'];
  yProbaPathogenicity: Scalars['Float'];
};

export type V2DOdds = {
  __typename?: 'V2DOdds';
  oddsCI?: Maybe<Scalars['Float']>;
  oddsCILower?: Maybe<Scalars['Float']>;
  oddsCIUpper?: Maybe<Scalars['Float']>;
};

export type Variant = {
  __typename?: 'Variant';
  altAllele: Scalars['String'];
  /** Combined Annotation Dependent Depletion - Scaled score */
  caddPhred?: Maybe<Scalars['Float']>;
  /** Combined Annotation Dependent Depletion - Raw score */
  caddRaw?: Maybe<Scalars['Float']>;
  /** Ensembl Gene ID of a gene */
  chromosome: Scalars['String'];
  /** chrom ID GRCH37 */
  chromosomeB37?: Maybe<Scalars['String']>;
  /** gnomAD Allele frequency (African/African-American population) */
  gnomadAFR?: Maybe<Scalars['Float']>;
  /** gnomAD Allele frequency (Latino/Admixed American population) */
  gnomadAMR?: Maybe<Scalars['Float']>;
  /** gnomAD Allele frequency (Ashkenazi Jewish population) */
  gnomadASJ?: Maybe<Scalars['Float']>;
  /** gnomAD Allele frequency (East Asian population) */
  gnomadEAS?: Maybe<Scalars['Float']>;
  /** gnomAD Allele frequency (Finnish population) */
  gnomadFIN?: Maybe<Scalars['Float']>;
  /** gnomAD Allele frequency (Non-Finnish European population) */
  gnomadNFE?: Maybe<Scalars['Float']>;
  /** gnomAD Allele frequency (Non-Finnish Eurpoean Estonian sub-population) */
  gnomadNFEEST?: Maybe<Scalars['Float']>;
  /** gnomAD Allele frequency (Non-Finnish Eurpoean North-Western European sub-population) */
  gnomadNFENWE?: Maybe<Scalars['Float']>;
  /** gnomAD Allele frequency (Non-Finnish Eurpoean Other non-Finnish European sub-population) */
  gnomadNFEONF?: Maybe<Scalars['Float']>;
  /** gnomAD Allele frequency (Non-Finnish Eurpoean Southern European sub-population) */
  gnomadNFESEU?: Maybe<Scalars['Float']>;
  /** gnomAD Allele frequency (Other (population not assigned) population) */
  gnomadOTH?: Maybe<Scalars['Float']>;
  /** Variant ID */
  id: Scalars['String'];
  /** Most severe consequence */
  mostSevereConsequence?: Maybe<Scalars['String']>;
  /** Nearest protein-coding gene */
  nearestCodingGene?: Maybe<Gene>;
  /** Distance to the nearest gene (protein-coding biotype) */
  nearestCodingGeneDistance?: Maybe<Scalars['Long']>;
  /** Nearest gene */
  nearestGene?: Maybe<Gene>;
  /** Distance to the nearest gene (any biotype) */
  nearestGeneDistance?: Maybe<Scalars['Long']>;
  /** Approved symbol name of a gene */
  position: Scalars['Long'];
  /** Approved symbol name of a gene */
  positionB37?: Maybe<Scalars['Long']>;
  refAllele: Scalars['String'];
  /** Approved symbol name of a gene */
  rsId?: Maybe<Scalars['String']>;
};

export type Version = {
  __typename?: 'Version';
  major: Scalars['Int'];
  minor: Scalars['Int'];
  patch: Scalars['Int'];
};

export type SearchQueryQueryVariables = Exact<{
  queryString: Scalars['String'];
}>;


export type SearchQueryQuery = { __typename?: 'Query', search: { __typename?: 'SearchResult', totalGenes: number, totalVariants: number, totalStudies: number, genes: Array<{ __typename?: 'Gene', id: string, symbol?: string | null, chromosome?: string | null, start?: number | null, end?: number | null }>, variants: Array<{ __typename?: 'Variant', id: string, rsId?: string | null, chromosome: string, position: number, refAllele: string, altAllele: string }>, studies: Array<{ __typename?: 'Study', studyId: string, traitReported: string, pmid?: string | null, pubAuthor?: string | null, pubDate?: string | null, pubJournal?: string | null, nInitial?: number | null, numAssocLoci?: number | null, hasSumstats?: boolean | null }> } };


export const SearchQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SearchQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"queryString"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"search"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"queryString"},"value":{"kind":"Variable","name":{"kind":"Name","value":"queryString"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalGenes"}},{"kind":"Field","name":{"kind":"Name","value":"totalVariants"}},{"kind":"Field","name":{"kind":"Name","value":"totalStudies"}},{"kind":"Field","name":{"kind":"Name","value":"genes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"chromosome"}},{"kind":"Field","name":{"kind":"Name","value":"start"}},{"kind":"Field","name":{"kind":"Name","value":"end"}}]}},{"kind":"Field","name":{"kind":"Name","value":"variants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rsId"}},{"kind":"Field","name":{"kind":"Name","value":"chromosome"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"refAllele"}},{"kind":"Field","name":{"kind":"Name","value":"altAllele"}}]}},{"kind":"Field","name":{"kind":"Name","value":"studies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"studyId"}},{"kind":"Field","name":{"kind":"Name","value":"traitReported"}},{"kind":"Field","name":{"kind":"Name","value":"pmid"}},{"kind":"Field","name":{"kind":"Name","value":"pubAuthor"}},{"kind":"Field","name":{"kind":"Name","value":"pubDate"}},{"kind":"Field","name":{"kind":"Name","value":"pubJournal"}},{"kind":"Field","name":{"kind":"Name","value":"nInitial"}},{"kind":"Field","name":{"kind":"Name","value":"numAssocLoci"}},{"kind":"Field","name":{"kind":"Name","value":"hasSumstats"}}]}}]}}]}}]} as unknown as DocumentNode<SearchQueryQuery, SearchQueryQueryVariables>;