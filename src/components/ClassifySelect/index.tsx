import { TreeSelect, TreeSelectProps } from 'antd';
import { ReactNode, useEffect, useState } from 'react';
import { DefaultOptionType } from 'antd/lib/select';
import { productAPI } from '@/services';
import { getContainer } from '@/utils';

type TreeNode = Omit<DefaultOptionType, 'label'>;
const dataToOptions = (data: defs.product.BackendCategory[]): TreeNode[] =>
  data.map((i) => ({
    id: i.id,
    pId: i.parentId,
    value: i.id,
    title: i.name,
    isLeaf: !!i.last,
  }));

type ValueType = string | string[];

type ClassifySelectProps = {
  placeholder?: ReactNode;
  value?: string;
  treeCheckable?: boolean;
  valueType?: 'label' | 'value' | 'all';
  onChange?: (
    value?: ValueType | { value: ValueType; label: ValueType },
  ) => void;
};
const ClassifySelect = (props: ClassifySelectProps) => {
  const {
    placeholder,
    value,
    onChange,
    valueType = 'value',
    treeCheckable = false,
  } = props;
  const [treeData, setTreeData] = useState<TreeNode[]>([]);
  const [loading, setLoading] = useState(false);

  const onLoadData: TreeSelectProps['loadData'] = ({ id }) =>
    productAPI.boCategory.getSubCategory
      .request({ categoryId: id })
      .then(({ data }) =>
        setTreeData([...treeData, ...dataToOptions(data || [])]),
      );

  const handleChange = (newValue: string | string[], label: any[]) => {
    if (onChange) {
      if (valueType === 'value') {
        onChange(newValue);
        return;
      }
      if (valueType === 'label') {
        onChange(label[0]);
        return;
      }
      if (treeCheckable) {
        onChange({ value: newValue, label });
      } else {
        onChange({ value: newValue, label: label[0] });
      }
    }
  };

  useEffect(() => {
    setLoading(true);
    productAPI.boCategory.getLevelOneCategory
      .request()
      .then(({ data = [] }) => {
        setTreeData(dataToOptions(data));
      })
      .finally(() => setLoading(false));
  }, []);

  const treeProps: TreeSelectProps = {
    loading,
    getPopupContainer: getContainer,
    treeDataSimpleMode: true,
    style: { width: '100%' },
    value,

    dropdownStyle: { maxHeight: 400, overflow: 'auto' },
    placeholder,
    onChange: handleChange,
    loadData: onLoadData,
    treeData,
    allowClear: true,
    treeCheckable,
    maxTagCount: 6,
    maxTagTextLength: 20,
    showCheckedStrategy: TreeSelect.SHOW_PARENT,
  };

  return <TreeSelect {...treeProps} />;
};

export default ClassifySelect;
