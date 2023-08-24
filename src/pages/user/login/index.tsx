import React from 'react';
import { useRequest } from 'ahooks';
import { Alert, Button, Form, Input } from 'antd';
import { useRecoilState } from 'recoil';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { t } from 'i18next';
import { LockTwoTone, UserOutlined } from '@ant-design/icons';
// import MD5 from "md5";

import { backofficeAPI } from '@/services';
import { loginStateAtom } from '@/atoms/login';
import { Office, SelectLang } from '@/components';
import slogon from '@/assets/99-Ranch-Market.png';

import styles from './index.less';

export const LoginMessage: React.FC<{ content: string }> = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);

interface Props {
  userLogin?: Record<string, any>;
  submitting?: boolean;
}
const Login: React.FC<Props> = (props) => {
  const { userLogin = {}, submitting } = props;
  const { loading, runAsync } = useRequest(
    backofficeAPI.webAdmin.login.request,
    { manual: true },
  );
  const [search] = useSearchParams();
  const { status } = userLogin;
  const [login, setLogin] = useRecoilState(loginStateAtom);
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const handleSubmit = async (username: string, password: string) => {
    runAsync({
      account: username,
      password: password.trim(),
    }).then(({ success, data }) => {
      if (success && data) {
        const token = data?.token;
        setLogin({
          ...login,
          account: username,
          token,
          isLogin: true,
        });
        localStorage.setItem('username', data?.account ?? '');
        localStorage.setItem('token', token ?? '');
        const [, pathname = login.indexPath] = (
          search.get('redirect') ?? ''
        ).split(window.location.origin);
        navigate(pathname || '/', { replace: true });
      }
    });
  };

  return (
    <div>
      <div className={styles.systemHeader}>
        <div className={styles.innerWrapper}>
          <img src={slogon} className={styles.slogon} alt="" />
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.brandDisplay}>
          <Office />
        </div>
        <div className={styles.outerContainer}>
          <div className={styles.selectLang}>
            <SelectLang />
          </div>

          <div className={styles.header}>
            <img src={slogon} className={styles.slogon} alt="" />
          </div>

          <Form
            initialValues={{
              autoLogin: true,
            }}
            form={form}
          >
            {status === 'error' && !submitting && (
              <LoginMessage content={t<string>('pages.login.errorMessage')} />
            )}
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: t<string>('pages.login.user.required'),
                },
                // {
                //   validator: (rule, value) => {
                //     let message;
                //     if (!value) return Promise.reject(new Error(message));
                //     if (
                //       value.includes(" ") ||
                //       !value.trim().endsWith(TAWA_EMAIL_SUFFIX)
                //     ) {
                //       message = t("pages.login.user.valid");
                //     }
                //
                //     if (message) {
                //       return Promise.reject(new Error(message));
                //     }
                //     return Promise.resolve();
                //   },
                // },
              ]}
            >
              <Input
                size="large"
                prefix={<UserOutlined className={styles.prefixIcon} />}
                placeholder={t<string>('pages.login.user.placeholder')}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: t<string>('pages.login.password.required'),
                },
                {
                  validator: (rule, value) => {
                    let message;
                    if (value?.includes(' ')) {
                      message = t<string>('pages.login.password.valid');
                    }

                    if (message) {
                      return Promise.reject(new Error(message));
                    }
                    return Promise.resolve();
                  },
                },
              ]}
            >
              <Input.Password
                size="large"
                prefix={<LockTwoTone className={styles.prefixIcon} />}
                placeholder={t<string>('pages.login.password.placeholder')}
              />
            </Form.Item>

            <div
              style={{
                marginBottom: 88,
              }}
            >
              <a
                href="https://support.tawa.com/password/new"
                style={{
                  float: 'right',
                }}
              >
                {t<string>('pages.login.forgotPassword')}
              </a>
            </div>

            <Button
              loading={loading}
              size="large"
              style={{
                width: '100%',
              }}
              type="primary"
              onClick={() => {
                form
                  .validateFields()
                  .then((values: { password: string; username: string }) => {
                    const { password, username } = values;
                    handleSubmit(username, password);
                  });
              }}
            >
              {t<string>('pages.login.submit')}
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
