import { YOUTUBE_LINK } from '@/constants';
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import { useIntl } from 'umi';

const Footer: React.FC = () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: 'Made by Jarvis Studio',
  });

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Jarvis',
          title: 'Jarvis Studio',
          href: YOUTUBE_LINK,
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/JarvisChan666',
          blankTarget: true,
        },
        {
          key: 'Jarvis Chan',
          title: 'Jarvis Ins',
          href: 'https://www.instagram.com/jvcchan/?next=%2F',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
