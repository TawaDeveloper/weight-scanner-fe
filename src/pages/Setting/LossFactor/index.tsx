import { Button, InputNumber, Tree, message } from 'antd';
import { DataNode } from 'antd/lib/tree';
import { t } from 'i18next';
import { useEffect, useState } from 'react';
import { bakeryAPI } from '@/services';
import styles from './index.less';
import ContentPanel from '@/components/ContentPanel';
import PermissionComponent from '@/components/PermissionComponent';

type FactorSettingMap = {
  [key: string]: {
    id: string;
    value: number | undefined;
    newValue: number | undefined;
  };
};
const LossFactor = () => {
  const [treeData, setTreeData] = useState<DataNode[]>([]);
  const [lossFactorSetting, setLossFactorSetting] = useState<FactorSettingMap>(
    {},
  );
  const generateTreeData = (
    datas: defs.bakery.LossFactorTree[],
    map: FactorSettingMap,
  ) => {
    const treeNodes: DataNode[] = [];
    for (let i = 0, l = datas.length; i < l; i++) {
      const data = datas[i];
      if (data && data.id && data.level === 3) {
        map[data.id] = {
          id: data.id,
          value: data.lossFactor,
          newValue: data.lossFactor,
        };
      }
      const node: DataNode = {
        title: data.name,
        key: `${data.id}`,
      };
      if (data.children && data.children?.length > 0) {
        node.children = generateTreeData(data.children, map);
      }
      if (!data.children || data.children.length === 0) {
        node.isLeaf = true;
      }
      treeNodes.push(node);
    }
    return treeNodes;
  };
  const initTreeData = async () => {
    const response = await bakeryAPI.lossFactor.getLossFactorTree.request();
    if (response.data) {
      const newLossFactorSetting: FactorSettingMap = {};
      setTreeData(generateTreeData(response.data, newLossFactorSetting));
      setLossFactorSetting(newLossFactorSetting);
    }
  };

  const save = async () => {
    const datas = Object.values(lossFactorSetting)
      .filter((item) => {
        return item.value !== item.newValue && item.newValue;
      })
      .map((item) => {
        return {
          categoryId: item.id,
          lossFactor: item.newValue,
        };
      });
    const response = await bakeryAPI.lossFactor.saveLossFactor.request({
      list: datas,
    });
    if (response.code === 0) {
      message.success(t<string>('pages.common.operationSuccess'));
    }
  };

  useEffect(() => {
    initTreeData();
  }, []);
  const renderNode: any = (nodeData: any) => {
    if (lossFactorSetting[nodeData.key]) {
      return (
        <div className={styles.lossFactorNode}>
          <div>{nodeData.title ? nodeData.title : ''}</div>
          <div className={styles.lossFactorSetting}>
            损耗系数:
            <InputNumber
              min={100}
              step={1}
              precision={0}
              addonAfter={<div>%</div>}
              className={styles.lossFactorInput}
              value={
                lossFactorSetting[nodeData.key]
                  ? lossFactorSetting[nodeData.key].newValue
                  : undefined
              }
              onChange={(value) => {
                setLossFactorSetting((setting) => {
                  const newSetting = { ...setting };
                  newSetting[nodeData.key].newValue = value || 0;
                  return newSetting;
                });
              }}
            />
            <div className={styles.lossFactorWarning}>请填入≥100的整数</div>
          </div>
        </div>
      );
    }

    return <div>{nodeData.title ? nodeData.title : ''}</div>;
  };
  return (
    <ContentPanel>
      <Tree
        treeData={treeData}
        titleRender={(nodeData) => {
          return renderNode(nodeData);
        }}
      />
      <PermissionComponent code="component:Loss Factor:Create">
        <Button
          onClick={() => {
            save();
          }}
        >
          保存
        </Button>
      </PermissionComponent>
    </ContentPanel>
  );
};

export default LossFactor;
