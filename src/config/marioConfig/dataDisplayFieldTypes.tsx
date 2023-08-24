// Data Display FieldTypes

import { Badge, BadgeProps } from 'antd';
import TagContainer, {
  TagContainerProps,
} from '@/components/TagContainer/index';
import { getDatePstString, timestampToPST } from '@/utils';

interface badgeDisplay extends BadgeProps {
  value: any;
  index: number;
}

interface tagContainerDisplay extends TagContainerProps {
  value: any[];
  index: number;
}
interface TimePstProps {
  value: number | string;
  index: number;
  format?: string;
}

interface TimeStampProps {
  value: number;
  index: number;
  format?: string;
}

export default {
  badge: ({ value, index, ...others }: badgeDisplay) => <Badge {...others} />,
  'tag-container': ({ value, index, ...others }: tagContainerDisplay) => (
    <TagContainer {...others} />
  ),
  /**
   * @description 用于将时间转PST时间展示
   */
  'time-pst': ({ value, format }: TimePstProps) =>
    value && getDatePstString(value, format),
  /**
   * @description 用于timestamp时间展示
   */
  'time-stamp': ({ value, format }: TimeStampProps) =>
    value && timestampToPST(value, format),
};
