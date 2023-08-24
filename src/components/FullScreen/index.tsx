import React, { useState, useEffect } from 'react';
import screenfull from 'screenfull';
import { message, Tooltip } from 'antd';
import { FullscreenExitOutlined, FullscreenOutlined } from '@ant-design/icons';
import { t } from 'i18next';

import './index.less';

type IconProps = {
  isFullscreen: boolean;
  [prop: string]: any;
};

const click = () => {
  if (!screenfull.isEnabled) {
    message.warning('you browser can not work');
    return false;
  }
  screenfull.toggle();
  return true;
};

const Icon: React.FC<IconProps> = ({ isFullscreen, ...props }) => (
  <>
    {isFullscreen ? (
      <FullscreenExitOutlined {...props} />
    ) : (
      <FullscreenOutlined {...props} />
    )}
  </>
);

const FullScreen = () => {
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const change = () => {
    setIsFullscreen(screenfull.isFullscreen);
  };

  useEffect(() => {
    screenfull.isEnabled && screenfull.on('change', change);
    return () => {
      screenfull.isEnabled && screenfull.off('change', change);
    };
  }, []);

  const title = t(
    `${
      isFullscreen
        ? 'button.common.cancelFullScreen'
        : 'button.common.fullScreen'
    }`,
  );

  return (
    <div className="fullScreen-container">
      <Tooltip placement="bottom" title={title}>
        <Icon
          isFullscreen={isFullscreen}
          onClick={click}
          style={{ verticalAlign: '-2px' }}
        />
      </Tooltip>
    </div>
  );
};

export default FullScreen;
