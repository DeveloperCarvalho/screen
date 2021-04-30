// Use JSS for CadastrarVaga component
import { colors } from '@bayon/commons';

const styles = {
  header: { height: '48px', backgroundColor: colors.neutralLighter },
  headerContent: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
    margin: '0 0 0 20px',
  },
  container: { margin: '30px auto', width: '1185px' },
  containerContent: { margin: '20px' },
  form: { margin: '20px 0 0 -12px' },
  hr: { border: `1px solid ${colors.neutralTertiaryAlt}`, margin: '20px 0' },
  table: { margin: '0 0 22px 0' },
  activityMember: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  config: { margin: '10px 0 0 0' },
  configItem: { margin: '10px 0 0 0' },
};

export default styles;
