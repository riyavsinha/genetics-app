import { Fragment } from 'react';
import { Link } from '../../ot-ui-components';

type XRefLinksProps = {
  label: string;
  urlStem: string;
  ids: string[];
};
function XRefLinks({ label, urlStem, ids }: XRefLinksProps) {
  return (
    <span>
      {label}:{' '}
      {ids.map((id, i) => (
        <Fragment key={id}>
          <Link external to={`${urlStem}${id}`}>
            {id}
          </Link>
          {i < ids.length - 1 ? ', ' : ''}
        </Fragment>
      ))}
    </span>
  );
}

export default XRefLinks;
