import { EMPTY_FIELD_PLACEHOLDER } from '@/constants';

export interface TagContainerProps {
  type?: 'tag' | 'container';
  separator?: string;
  options: Array<string | number>;
}

const TagContainer = (props: TagContainerProps) => {
  const { type = 'tag', options, separator = ',' } = props;

  return (
    <>
      {type === 'tag' && (
        <>{options ? options.join(separator) : EMPTY_FIELD_PLACEHOLDER}</>
      )}
      {type === 'container' && <>{options}</>}
    </>
  );
};
export default TagContainer;
