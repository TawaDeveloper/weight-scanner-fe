import React from 'react';
import { t } from 'i18next';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
import type { ResultStatusType } from 'antd/es/result';

interface Props {
  code: ResultStatusType;
}

const AccessResult: React.FC<Props> = ({ code }) => {
  const navigate = useNavigate();

  return (
    <Result
      status={code}
      title={code}
      subTitle={t<string>(`access${code}`)}
      extra={
        <Button type="primary" onClick={() => navigate('/', { replace: true })}>
          {t<string>('pages.common.backToHome')}
        </Button>
      }
    />
  );
};

export default AccessResult;
